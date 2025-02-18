import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutMetaphysicalReceipt } from "./createWithoutMetaphysicalReceipt";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestCreateRelationListWithoutMetaphysicalReceipt = builder
  .inputRef<any>("ThresholdManifestCreateRelationListWithoutMetaphysicalReceipt")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ThresholdManifestWhereUnique] }),
      create: t.field({ type: [ThresholdManifestCreateWithoutMetaphysicalReceipt] }),
    }),
  });
