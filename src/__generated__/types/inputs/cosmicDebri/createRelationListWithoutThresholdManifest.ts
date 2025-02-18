import { builder } from "src/builder";

import { CosmicDebriCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { CosmicDebriWhereUnique } from "./whereUnique";

export const CosmicDebriCreateRelationListWithoutThresholdManifest = builder
  .inputRef<any>("CosmicDebriCreateRelationListWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [CosmicDebriWhereUnique] }),
      create: t.field({ type: [CosmicDebriCreateWithoutThresholdManifest] }),
    }),
  });
