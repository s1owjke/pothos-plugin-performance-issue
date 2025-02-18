import { builder } from "src/builder";

import { MetaphysicalReceiptCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { MetaphysicalReceiptWhereUnique } from "./whereUnique";

export const MetaphysicalReceiptCreateRelationWithoutThresholdManifest = builder
  .inputRef<any>("MetaphysicalReceiptCreateRelationWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: MetaphysicalReceiptWhereUnique }),
      create: t.field({ type: MetaphysicalReceiptCreateWithoutThresholdManifest }),
    }),
  });
