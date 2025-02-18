import { builder } from "src/builder";

import { GloriousMistakeCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { GloriousMistakeWhereUnique } from "./whereUnique";

export const GloriousMistakeCreateRelationWithoutThresholdManifest = builder
  .inputRef<any>("GloriousMistakeCreateRelationWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: GloriousMistakeWhereUnique }),
      create: t.field({ type: GloriousMistakeCreateWithoutThresholdManifest }),
    }),
  });
