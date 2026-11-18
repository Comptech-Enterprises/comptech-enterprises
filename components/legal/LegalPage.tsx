import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import type { ReactNode } from "react";

export interface LegalSection {
  id: string;
  title: string;
  body: ReactNode;
}

/** Shared layout for the Privacy Policy and Terms of Service pages. */
export function LegalPage({
  path,
  title,
  intro,
  updated,
  sections,
}: {
  path: string;
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <Navbar />
      <Breadcrumbs path={path} />
      <main className="bg-white pb-24 pt-36 text-[#121317] md:pt-44">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h1 className="text-[36px] leading-[1.05] tracking-[-0.03em] md:text-[52px]" style={{ fontWeight: 450 }}>
            {title}
          </h1>
          <p className="mt-4 text-sm text-gray-500">Last updated: {updated}</p>
          <p className="mt-8 text-[17px] leading-[1.6] text-[#2f3034]">{intro}</p>

          <nav aria-label="On this page" className="mt-10 rounded-2xl border border-black/10 bg-gray-50 p-5">
            <p className="text-sm font-semibold text-gray-900">On this page</p>
            <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm text-gray-700">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="hover:text-[#5C0F26] hover:underline">
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="blog-body mt-4 text-[17px] leading-[1.6] text-[#2f3034]">
            {sections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-28">
                <h2>{s.title}</h2>
                {s.body}
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
