import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutMetaphysicalReceipt } from "./createWithoutMetaphysicalReceipt";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestCreateRelationWithoutMetaphysicalReceipt = builder
  .inputRef<any>("ThresholdManifestCreateRelationWithoutMetaphysicalReceipt")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ThresholdManifestWhereUnique }),
      create: t.field({ type: ThresholdManifestCreateWithoutMetaphysicalReceipt }),
    }),
  });
