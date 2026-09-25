import { ChapterArrive } from "@/components/chapters/ChapterArrive";
import { ChapterPlace } from "@/components/chapters/ChapterPlace";
import { ChapterLand } from "@/components/chapters/ChapterLand";
import { ChapterFamily } from "@/components/chapters/ChapterFamily";
import { ChapterCraft } from "@/components/chapters/ChapterCraft";
import { ChapterWineRail } from "@/components/chapters/ChapterWineRail";
import { ChapterTable } from "@/components/chapters/ChapterTable";
import { ChapterGather } from "@/components/chapters/ChapterGather";
import { ChapterRegion } from "@/components/chapters/ChapterRegion";
import { ChapterReturn } from "@/components/chapters/ChapterReturn";

export default function HomePage() {
  return (
    <>
      <ChapterArrive />
      <ChapterPlace />
      <ChapterLand />
      <ChapterFamily />
      <ChapterCraft />
      <ChapterWineRail />
      <ChapterTable />
      <ChapterGather />
      <ChapterRegion />
      <ChapterReturn />
    </>
  );
}
