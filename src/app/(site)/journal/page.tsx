import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { getJournalPosts } from "@/lib/content";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Journal",
  description: "The Harman Journal — vineyard, winemaking, food, people and life at Wattle Bank.",
};

export default function JournalPage() {
  const posts = getJournalPosts();

  return (
    <>
      <PageHero label="The Harman Journal" title="Notes from the farm" tone="cream">
        <p>Vineyard, winemaking, food, people, season and region — told as they happen.</p>
      </PageHero>
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <ul className="divide-y divide-charcoal/10">
            {posts.map((post) => (
              <li key={post.id}>
                <Link
                  href={`/journal/${post.slug}`}
                  className="group grid md:grid-cols-[8rem_1fr] gap-4 py-10 no-underline"
                >
                  <div>
                    <p className="label-micro text-burgundy">{post.category}</p>
                    <time className="text-xs text-stone mt-2 block" dateTime={post.publishedAt}>
                      {formatDate(post.publishedAt)}
                    </time>
                  </div>
                  <div>
                    <h2 className="font-display text-3xl md:text-4xl group-hover:text-burgundy transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-stone max-w-2xl">{post.excerpt}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
