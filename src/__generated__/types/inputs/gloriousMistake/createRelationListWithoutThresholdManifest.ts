import { builder } from "src/builder";

import { GloriousMistakeCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { GloriousMistakeWhereUnique } from "./whereUnique";

export const GloriousMistakeCreateRelationListWithoutThresholdManifest = builder
  .inputRef<any>("GloriousMistakeCreateRelationListWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GloriousMistakeWhereUnique] }),
      create: t.field({ type: [GloriousMistakeCreateWithoutThresholdManifest] }),
    }),
  });
