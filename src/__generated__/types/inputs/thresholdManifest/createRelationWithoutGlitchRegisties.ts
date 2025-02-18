import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutGlitchRegisties } from "./createWithoutGlitchRegisties";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestCreateRelationWithoutGlitchRegisties = builder
  .inputRef<any>("ThresholdManifestCreateRelationWithoutGlitchRegisties")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ThresholdManifestWhereUnique }),
      create: t.field({ type: ThresholdManifestCreateWithoutGlitchRegisties }),
    }),
  });
