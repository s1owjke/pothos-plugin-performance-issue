import { builder } from "src/builder";

import { MetaphysicalReceiptCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { MetaphysicalReceiptWhereUnique } from "./whereUnique";

export const MetaphysicalReceiptCreateRelationListWithoutThresholdManifest = builder
  .inputRef<any>("MetaphysicalReceiptCreateRelationListWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [MetaphysicalReceiptWhereUnique] }),
      create: t.field({ type: [MetaphysicalReceiptCreateWithoutThresholdManifest] }),
    }),
  });
