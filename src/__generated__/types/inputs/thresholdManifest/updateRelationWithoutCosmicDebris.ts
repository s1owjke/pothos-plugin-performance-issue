import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutCosmicDebris } from "./createWithoutCosmicDebris";
import { ThresholdManifestUpdateWithoutCosmicDebris } from "./updateWithoutCosmicDebris";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestUpdateRelationWithoutCosmicDebris = builder
  .inputRef<any>("ThresholdManifestUpdateRelationWithoutCosmicDebris")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ThresholdManifestWhereUnique }),
      disconnect: t.field({ type: ThresholdManifestWhereUnique }),
      create: t.field({ type: ThresholdManifestCreateWithoutCosmicDebris }),
      update: t.field({ type: ThresholdManifestUpdateWithoutCosmicDebris }),
    }),
  });
