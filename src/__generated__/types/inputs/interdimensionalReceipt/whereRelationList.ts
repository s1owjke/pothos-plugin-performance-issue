import { builder } from "src/builder";

import { InterdimensionalReceiptWhere } from "./where";

export const InterdimensionalReceiptWhereRelationList = builder.inputRef<any>("InterdimensionalReceiptWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: InterdimensionalReceiptWhere, required: false }),
    every: t.field({ type: InterdimensionalReceiptWhere, required: false }),
    none: t.field({ type: InterdimensionalReceiptWhere, required: false }),
  }),
});
