import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutGlitchRegisties } from "./createWithoutGlitchRegisties";
import { ThresholdManifestUpdateWithoutGlitchRegisties } from "./updateWithoutGlitchRegisties";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestUpdateRelationWithoutGlitchRegisties = builder
  .inputRef<any>("ThresholdManifestUpdateRelationWithoutGlitchRegisties")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ThresholdManifestWhereUnique }),
      disconnect: t.field({ type: ThresholdManifestWhereUnique }),
      create: t.field({ type: ThresholdManifestCreateWithoutGlitchRegisties }),
      update: t.field({ type: ThresholdManifestUpdateWithoutGlitchRegisties }),
    }),
  });
