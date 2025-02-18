import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestCreateRelationWithoutUnstableFrequency = builder
  .inputRef<any>("ThresholdManifestCreateRelationWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ThresholdManifestWhereUnique }),
      create: t.field({ type: ThresholdManifestCreateWithoutUnstableFrequency }),
    }),
  });
