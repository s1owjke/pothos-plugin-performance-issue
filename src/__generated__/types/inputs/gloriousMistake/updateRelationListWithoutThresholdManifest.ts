import { builder } from "src/builder";

import { GloriousMistakeCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { GloriousMistakeWhereUnique } from "./whereUnique";

export const GloriousMistakeUpdateRelationListWithoutThresholdManifest = builder
  .inputRef<any>("GloriousMistakeUpdateRelationListWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GloriousMistakeWhereUnique] }),
      set: t.field({ type: [GloriousMistakeWhereUnique] }),
      disconnect: t.field({ type: [GloriousMistakeWhereUnique] }),
      create: t.field({ type: [GloriousMistakeCreateWithoutThresholdManifest] }),
    }),
  });
