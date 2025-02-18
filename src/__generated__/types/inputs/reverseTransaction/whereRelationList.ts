import { builder } from "src/builder";

import { ReverseTransactionWhere } from "./where";

export const ReverseTransactionWhereRelationList = builder.inputRef<any>("ReverseTransactionWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: ReverseTransactionWhere, required: false }),
    every: t.field({ type: ReverseTransactionWhere, required: false }),
    none: t.field({ type: ReverseTransactionWhere, required: false }),
  }),
});
