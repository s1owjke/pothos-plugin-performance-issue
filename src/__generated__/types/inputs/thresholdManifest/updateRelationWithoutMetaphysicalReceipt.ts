import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutMetaphysicalReceipt } from "./createWithoutMetaphysicalReceipt";
import { ThresholdManifestUpdateWithoutMetaphysicalReceipt } from "./updateWithoutMetaphysicalReceipt";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestUpdateRelationWithoutMetaphysicalReceipt = builder
  .inputRef<any>("ThresholdManifestUpdateRelationWithoutMetaphysicalReceipt")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ThresholdManifestWhereUnique }),
      disconnect: t.field({ type: ThresholdManifestWhereUnique }),
      create: t.field({ type: ThresholdManifestCreateWithoutMetaphysicalReceipt }),
      update: t.field({ type: ThresholdManifestUpdateWithoutMetaphysicalReceipt }),
    }),
  });
