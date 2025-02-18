import { builder } from "src/builder";

import { MetaphysicalReceiptCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { MetaphysicalReceiptWhereUnique } from "./whereUnique";

export const MetaphysicalReceiptUpdateRelationListWithoutThresholdManifest = builder
  .inputRef<any>("MetaphysicalReceiptUpdateRelationListWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [MetaphysicalReceiptWhereUnique] }),
      set: t.field({ type: [MetaphysicalReceiptWhereUnique] }),
      disconnect: t.field({ type: [MetaphysicalReceiptWhereUnique] }),
      create: t.field({ type: [MetaphysicalReceiptCreateWithoutThresholdManifest] }),
    }),
  });
