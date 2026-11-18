// Tell Bing (and other IndexNow engines) which URLs changed.
// Usage:  node scripts/indexnow.mjs            -> submits every URL in the live sitemap
//         node scripts/indexnow.mjs <url> ...  -> submits just those URLs
// The key file must be reachable at https://comptech.in/<key>.txt (it lives in /public).
const HOST = "comptech.in";
const KEY = "92b4c883fbaa4e3cfad21babd73375f1";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

async function sitemapUrls() {
  const res = await fetch(`https://${HOST}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap fetch failed: ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

const args = process.argv.slice(2);
const urlList = args.length ? args : await sitemapUrls();
if (!urlList.length) throw new Error("no URLs to submit");

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
});
// 200/202 = accepted. 422/403 usually means the key file is not live yet.
console.log(`IndexNow: submitted ${urlList.length} URLs -> HTTP ${res.status}`);
if (!(res.status === 200 || res.status === 202)) {
  console.log(await res.text());
  process.exit(1);
}
