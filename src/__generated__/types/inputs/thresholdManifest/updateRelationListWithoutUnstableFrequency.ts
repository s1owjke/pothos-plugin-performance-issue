import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestUpdateRelationListWithoutUnstableFrequency = builder
  .inputRef<any>("ThresholdManifestUpdateRelationListWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ThresholdManifestWhereUnique] }),
      set: t.field({ type: [ThresholdManifestWhereUnique] }),
      disconnect: t.field({ type: [ThresholdManifestWhereUnique] }),
      create: t.field({ type: [ThresholdManifestCreateWithoutUnstableFrequency] }),
    }),
  });
