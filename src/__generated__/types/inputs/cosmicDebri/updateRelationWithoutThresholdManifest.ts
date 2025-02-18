import { builder } from "src/builder";

import { CosmicDebriCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { CosmicDebriUpdateWithoutThresholdManifest } from "./updateWithoutThresholdManifest";
import { CosmicDebriWhereUnique } from "./whereUnique";

export const CosmicDebriUpdateRelationWithoutThresholdManifest = builder
  .inputRef<any>("CosmicDebriUpdateRelationWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: CosmicDebriWhereUnique }),
      disconnect: t.field({ type: CosmicDebriWhereUnique }),
      create: t.field({ type: CosmicDebriCreateWithoutThresholdManifest }),
      update: t.field({ type: CosmicDebriUpdateWithoutThresholdManifest }),
    }),
  });
