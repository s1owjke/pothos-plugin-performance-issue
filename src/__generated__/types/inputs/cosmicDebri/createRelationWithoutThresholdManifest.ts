import { builder } from "src/builder";

import { CosmicDebriCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { CosmicDebriWhereUnique } from "./whereUnique";

export const CosmicDebriCreateRelationWithoutThresholdManifest = builder
  .inputRef<any>("CosmicDebriCreateRelationWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: CosmicDebriWhereUnique }),
      create: t.field({ type: CosmicDebriCreateWithoutThresholdManifest }),
    }),
  });
