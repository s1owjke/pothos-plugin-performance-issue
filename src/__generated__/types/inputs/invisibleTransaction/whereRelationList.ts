import { builder } from "src/builder";

import { InvisibleTransactionWhere } from "./where";

export const InvisibleTransactionWhereRelationList = builder.inputRef<any>("InvisibleTransactionWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: InvisibleTransactionWhere, required: false }),
    every: t.field({ type: InvisibleTransactionWhere, required: false }),
    none: t.field({ type: InvisibleTransactionWhere, required: false }),
  }),
});
