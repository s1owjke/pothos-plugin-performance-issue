import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutCosmicDebris } from "./createWithoutCosmicDebris";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestUpdateRelationListWithoutCosmicDebris = builder
  .inputRef<any>("ThresholdManifestUpdateRelationListWithoutCosmicDebris")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ThresholdManifestWhereUnique] }),
      set: t.field({ type: [ThresholdManifestWhereUnique] }),
      disconnect: t.field({ type: [ThresholdManifestWhereUnique] }),
      create: t.field({ type: [ThresholdManifestCreateWithoutCosmicDebris] }),
    }),
  });
