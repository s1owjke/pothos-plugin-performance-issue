import { builder } from "src/builder";

export const MetaphysicalReceiptCreateWithoutThresholdManifest = builder
  .inputRef<any>("MetaphysicalReceiptCreateWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      createdAt: t.field({ type: "DateTime", required: true }),
      updatedAt: t.field({ type: "DateTime", required: true }),
    }),
  });
