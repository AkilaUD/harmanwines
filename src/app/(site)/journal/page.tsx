import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { MediaImage } from "@/components/ui/MediaImage";
import { getJournalPosts } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import { media } from "@/content/media";
import type { MediaAsset } from "@/content/media";

export const metadata: Metadata = {
  title: "Journal",
  description: "The Harman Journal — vineyard, winemaking, food, people and life at Wattle Bank.",
};

const plates: MediaAsset[] = [
  media.landVines,
  media.craftGrapes,
  media.tablePizza,
  media.gatherPergola,
  media.regionMorning,
  media.winePaddles,
  media.gatherPicnic,
];

export default function JournalPage() {
  const posts = getJournalPosts();

  return (
    <>
      <PageHero
        label="The Harman Journal"
        title="Notes from the farm"
        media={media.gatherPergola}
      >
        <p>Vineyard, winemaking, food, people, season and region — told as they happen.</p>
      </PageHero>
      <section className="pb-20 bg-linen">
        <div className="mx-auto max-w-7xl px-5 md:px-8 pt-10 md:pt-14">
          <ul className="space-y-10 md:space-y-14">
            {posts.map((post, i) => {
              const plate = plates[i % plates.length];
              return (
                <Reveal key={post.id} delay={0.04 * i}>
                  <li>
                    <Link
                      href={`/journal/${post.slug}`}
                      className="group grid md:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] gap-6 md:gap-10 no-underline items-start min-w-0"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden grain">
                        <MediaImage
                          asset={plate}
                          sizes="(max-width:768px) 100vw, 280px"
                          className="transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover:scale-[1.03]"
                        />
                      </div>
                      <div className="border-t border-dusk/10 pt-4 md:border-0 md:pt-0">
                        <p className="label-ui text-claret">{post.category}</p>
                        <time
                          className="text-xs text-loam mt-2 block font-ui"
                          dateTime={post.publishedAt}
                        >
                          {formatDate(post.publishedAt)}
                        </time>
                        <h2 className="font-display text-3xl md:text-4xl mt-3 text-dusk group-hover:text-claret transition-colors leading-tight">
                          {post.title}
                        </h2>
                        <p className="mt-3 text-loam max-w-2xl font-body">{post.excerpt}</p>
                      </div>
                    </Link>
                  </li>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
