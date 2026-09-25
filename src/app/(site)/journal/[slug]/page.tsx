import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getJournalPost, getJournalPosts } from "@/lib/content";
import { formatDate } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getJournalPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getJournalPost(slug);
  if (!post) return { title: "Journal" };
  return { title: post.title, description: post.excerpt };
}

export default async function JournalPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getJournalPost(slug);
  if (!post) notFound();

  return (
    <article className="pt-28 md:pt-36 pb-20 bg-linen text-dusk">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <p className="label-ui text-claret">{post.category}</p>
        <h1 className="font-display text-5xl md:text-6xl mt-3">{post.title}</h1>
        <time className="block mt-4 text-sm text-loam font-ui" dateTime={post.publishedAt}>
          {formatDate(post.publishedAt)}
        </time>
        <div className="prose-harman mt-10 text-lg text-loam font-body">
          {post.body.map((para) => (
            <p key={para.slice(0, 24)}>{para}</p>
          ))}
        </div>
        <p className="mt-12">
          <Link href="/journal" className="link-quiet link-claret font-ui text-sm">
            Back to journal
          </Link>
        </p>
      </div>
    </article>
  );
}
