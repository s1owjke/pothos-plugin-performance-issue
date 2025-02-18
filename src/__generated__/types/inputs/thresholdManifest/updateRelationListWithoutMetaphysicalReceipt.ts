import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutMetaphysicalReceipt } from "./createWithoutMetaphysicalReceipt";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestUpdateRelationListWithoutMetaphysicalReceipt = builder
  .inputRef<any>("ThresholdManifestUpdateRelationListWithoutMetaphysicalReceipt")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ThresholdManifestWhereUnique] }),
      set: t.field({ type: [ThresholdManifestWhereUnique] }),
      disconnect: t.field({ type: [ThresholdManifestWhereUnique] }),
      create: t.field({ type: [ThresholdManifestCreateWithoutMetaphysicalReceipt] }),
    }),
  });
