import { builder } from "src/builder";

export const MetaphysicalReceiptWhereUnique = builder.inputRef<any>("MetaphysicalReceiptWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: false }),
    thresholdManifestId: t.field({ type: "ID", required: false }),
  }),
});
