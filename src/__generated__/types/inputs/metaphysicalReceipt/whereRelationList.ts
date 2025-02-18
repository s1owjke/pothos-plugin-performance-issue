import { builder } from "src/builder";

import { MetaphysicalReceiptWhere } from "./where";

export const MetaphysicalReceiptWhereRelationList = builder.inputRef<any>("MetaphysicalReceiptWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: MetaphysicalReceiptWhere, required: false }),
    every: t.field({ type: MetaphysicalReceiptWhere, required: false }),
    none: t.field({ type: MetaphysicalReceiptWhere, required: false }),
  }),
});
