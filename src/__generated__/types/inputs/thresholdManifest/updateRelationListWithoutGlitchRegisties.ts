import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutGlitchRegisties } from "./createWithoutGlitchRegisties";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestUpdateRelationListWithoutGlitchRegisties = builder
  .inputRef<any>("ThresholdManifestUpdateRelationListWithoutGlitchRegisties")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ThresholdManifestWhereUnique] }),
      set: t.field({ type: [ThresholdManifestWhereUnique] }),
      disconnect: t.field({ type: [ThresholdManifestWhereUnique] }),
      create: t.field({ type: [ThresholdManifestCreateWithoutGlitchRegisties] }),
    }),
  });
