import { builder } from "src/builder";

import { MetaphysicalReceiptCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { MetaphysicalReceiptUpdateWithoutThresholdManifest } from "./updateWithoutThresholdManifest";
import { MetaphysicalReceiptWhereUnique } from "./whereUnique";

export const MetaphysicalReceiptUpdateRelationWithoutThresholdManifest = builder
  .inputRef<any>("MetaphysicalReceiptUpdateRelationWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: MetaphysicalReceiptWhereUnique }),
      disconnect: t.field({ type: MetaphysicalReceiptWhereUnique }),
      create: t.field({ type: MetaphysicalReceiptCreateWithoutThresholdManifest }),
      update: t.field({ type: MetaphysicalReceiptUpdateWithoutThresholdManifest }),
    }),
  });
