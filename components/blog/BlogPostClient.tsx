"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, Share2 } from "lucide-react";
import { BlogPost } from "@/lib/blog-data";

export function BlogPostClient({ post, relatedPosts }: { post: BlogPost; relatedPosts: BlogPost[] }) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title: post.title, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* share dismissed */
    }
  };

  return (
    <main className="min-h-screen bg-white pb-[120px] pt-28 text-[#121317] md:pt-40">
      {/* Header: narrow column */}
      <div className="mx-auto max-w-[1045px] px-5 sm:px-10">
        <div className="flex items-center gap-2 text-[13px] text-[#5f6368]">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#f1f3f4] px-3 py-1.5 text-[#3c4043] transition-colors hover:bg-[#e4e6e8]"
          >
            <ArrowLeft size={14} />
            All posts
          </Link>
          <span aria-hidden>/</span>
          <span>{post.category}</span>
        </div>

        <h1
          className="mt-8 text-[36px] leading-[1.05] tracking-[-0.03em] md:text-[56px]"
          style={{ fontWeight: 450 }}
        >
          {post.title}
        </h1>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-[#5f6368]">
            <span className="relative h-8 w-8 overflow-hidden rounded-full bg-[#f1f3f4]">
              <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
            </span>
            <span className="font-medium text-[#121317]">{post.author.name}</span>
            <span aria-hidden>·</span>
            <span>{post.publishDate}</span>
            <span aria-hidden>·</span>
            <span>{post.readTime}</span>
          </div>
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(33,34,38,0.12)] bg-white px-4 py-1.5 text-[13px] text-[#3c4043] transition-colors hover:bg-[#f1f3f4]"
          >
            {copied ? <Check size={14} /> : <Share2 size={14} />}
            {copied ? "Link copied" : "Share"}
          </button>
        </div>
      </div>

      {/* Hero: wider than text column */}
      <div className="mx-auto mt-10 max-w-[1323px] px-5 sm:px-10">
        <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[32px] bg-[#121317]">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            sizes="(min-width: 1323px) 1323px, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Body */}
      <div className="mx-auto mt-14 max-w-[1045px] px-5 sm:px-10">
        <div
          className="prose max-w-none text-[17px] leading-[1.6] text-[#2f3034]
            prose-headings:font-normal prose-headings:tracking-[-0.02em] prose-headings:text-[#121317]
            prose-h2:mb-4 prose-h2:mt-14 prose-h2:text-[32px] prose-h2:leading-tight
            prose-h3:mb-3 prose-h3:mt-10 prose-h3:text-2xl
            prose-p:my-5
            prose-a:text-[#121317] prose-a:underline
            prose-code:rounded prose-code:bg-[#f1f3f4] prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm
            prose-pre:rounded-2xl prose-pre:bg-[#121317] prose-pre:p-6
            prose-img:rounded-2xl prose-blockquote:border-l-2 prose-blockquote:pl-4"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {post.tags.length > 0 && (
          <div className="mt-14 flex flex-wrap gap-2 border-t border-[rgba(33,34,38,0.06)] pt-8">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-[#f1f3f4] px-3 py-1 text-xs text-[#3c4043]">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* More posts */}
      {relatedPosts.length > 0 && (
        <div className="mx-auto mt-24 max-w-[1440px] px-5 sm:px-10">
          <h2 className="text-[34px] tracking-[-0.02em]" style={{ fontWeight: 450 }}>
            More posts
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-x-12 gap-y-12 lg:grid-cols-2">
            {relatedPosts.slice(0, 4).map((rel) => (
              <div
                key={rel.slug}
                className="flex items-center justify-between gap-12 border-b border-[rgba(33,34,38,0.06)] pb-9"
              >
                <div className="flex max-w-[440px] flex-col gap-5">
                  <Link href={`/blog/${rel.slug}`}>
                    <h3 className="text-[24px] leading-[1.15] tracking-[-0.01em] text-[#2f3034]" style={{ fontWeight: 450 }}>
                      {rel.title}
                    </h3>
                  </Link>
                  <div className="text-[13px] text-[#5f6368]">
                    {rel.publishDate} · {rel.readTime}
                  </div>
                </div>
                <Link
                  href={`/blog/${rel.slug}`}
                  className="relative block h-[100px] w-[100px] shrink-0 overflow-hidden rounded-2xl bg-[#121317] sm:h-[160px] sm:w-[160px]"
                >
                  <Image src={rel.coverImage} alt={rel.title} fill sizes="160px" className="object-cover" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
