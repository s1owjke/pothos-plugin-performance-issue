import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutGlitchRegisties } from "./createWithoutGlitchRegisties";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestCreateRelationListWithoutGlitchRegisties = builder
  .inputRef<any>("ThresholdManifestCreateRelationListWithoutGlitchRegisties")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ThresholdManifestWhereUnique] }),
      create: t.field({ type: [ThresholdManifestCreateWithoutGlitchRegisties] }),
    }),
  });
