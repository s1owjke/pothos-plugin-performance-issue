import { builder } from "src/builder";

export const MetaphysicalReceiptUpdateWithoutThresholdManifest = builder
  .inputRef<any>("MetaphysicalReceiptUpdateWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      createdAt: t.field({ type: "DateTime", required: false }),
      updatedAt: t.field({ type: "DateTime", required: false }),
    }),
  });
