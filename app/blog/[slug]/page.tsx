import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BLOG_POSTS } from "@/lib/blog-data";
import { BlogPostClient } from "@/components/blog/BlogPostClient";
import { faqJsonLd } from "@/lib/faqs";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { blogPostTrail } from "@/lib/breadcrumbs";
import { pageAlternates } from "@/lib/seo";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://comptech.in";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

// Posts only store a calendar date, so emit a full ISO 8601 timestamp at a fixed
// 09:00 India Standard Time (+05:30), which schema.org / Google prefer over date-only.
function toIsoDate(dateStr: string): string {
  const parsed = new Date(dateStr);
  if (Number.isNaN(parsed.getTime())) return dateStr;
  const y = parsed.getFullYear();
  const m = String(parsed.getMonth() + 1).padStart(2, "0");
  const d = String(parsed.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}T09:00:00+05:30`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  const seoTitle = post.metaTitle ?? post.title;
  const seoDescription = post.metaDescription ?? post.excerpt;
  const publishedIso = toIsoDate(post.publishDate);

  return {
    title: post.metaTitle ? { absolute: post.metaTitle } : post.title,
    description: seoDescription,
    keywords: post.tags,
    authors: [{ name: post.author.name }],
    alternates: pageAlternates(`/blog/${post.slug}`),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      type: "article",
      url: `/blog/${post.slug}`,
      publishedTime: publishedIso,
      authors: [post.author.name],
      tags: post.tags,
      images: [
        {
          url: post.coverImage,
          alt: post.coverAlt ?? post.title,
          ...(post.coverImage.startsWith("/")
            ? { width: post.coverWidth ?? 1200, height: post.coverHeight ?? 630 }
            : {}),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: seoDescription,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug);
  const canonicalUrl = `${SITE_URL}/blog/${post.slug}`;
  const coverUrl = post.coverImage.startsWith("http")
    ? post.coverImage
    : `${SITE_URL}${post.coverImage}`;
  const publishedIso = toIsoDate(post.publishDate);
  const wordCount = post.content
    .replace(/<[^>]+>/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription ?? post.excerpt,
    image: coverUrl,
    datePublished: publishedIso,
    dateModified: publishedIso,
    inLanguage: "en-US",
    wordCount,
    articleSection: post.category,
    keywords: post.tags.join(", "),
    url: canonicalUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: "Comptech Enterprises",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo.webp`,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {post.faqs && post.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(post.faqs)) }}
        />
      )}
      <Navbar transparent />
      <Breadcrumbs trail={blogPostTrail(post.slug, post.shortTitle ?? post.title)} />
      <BlogPostClient post={post} relatedPosts={relatedPosts} />
      <Footer />
    </>
  );
}
