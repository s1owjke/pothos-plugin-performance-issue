import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutCosmicDebris } from "./createWithoutCosmicDebris";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestCreateRelationListWithoutCosmicDebris = builder
  .inputRef<any>("ThresholdManifestCreateRelationListWithoutCosmicDebris")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ThresholdManifestWhereUnique] }),
      create: t.field({ type: [ThresholdManifestCreateWithoutCosmicDebris] }),
    }),
  });
