import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutCosmicDebris } from "./createWithoutCosmicDebris";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestCreateRelationWithoutCosmicDebris = builder
  .inputRef<any>("ThresholdManifestCreateRelationWithoutCosmicDebris")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ThresholdManifestWhereUnique }),
      create: t.field({ type: ThresholdManifestCreateWithoutCosmicDebris }),
    }),
  });
