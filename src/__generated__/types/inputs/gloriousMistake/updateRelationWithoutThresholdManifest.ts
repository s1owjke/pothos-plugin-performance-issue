import { builder } from "src/builder";

import { GloriousMistakeCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { GloriousMistakeUpdateWithoutThresholdManifest } from "./updateWithoutThresholdManifest";
import { GloriousMistakeWhereUnique } from "./whereUnique";

export const GloriousMistakeUpdateRelationWithoutThresholdManifest = builder
  .inputRef<any>("GloriousMistakeUpdateRelationWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: GloriousMistakeWhereUnique }),
      disconnect: t.field({ type: GloriousMistakeWhereUnique }),
      create: t.field({ type: GloriousMistakeCreateWithoutThresholdManifest }),
      update: t.field({ type: GloriousMistakeUpdateWithoutThresholdManifest }),
    }),
  });
