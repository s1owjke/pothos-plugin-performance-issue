import { builder } from "src/builder";

export const MetaphysicalReceiptCreateMany = builder.inputRef<any>("MetaphysicalReceiptCreateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    thresholdManifestId: t.field({ type: "ID", required: false }),
  }),
});
