import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { ThresholdManifestUpdateWithoutUnstableFrequency } from "./updateWithoutUnstableFrequency";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestUpdateRelationWithoutUnstableFrequency = builder
  .inputRef<any>("ThresholdManifestUpdateRelationWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ThresholdManifestWhereUnique }),
      disconnect: t.field({ type: ThresholdManifestWhereUnique }),
      create: t.field({ type: ThresholdManifestCreateWithoutUnstableFrequency }),
      update: t.field({ type: ThresholdManifestUpdateWithoutUnstableFrequency }),
    }),
  });
