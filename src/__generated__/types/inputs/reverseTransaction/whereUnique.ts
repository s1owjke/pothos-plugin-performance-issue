import { builder } from "src/builder";

export const ReverseTransactionWhereUnique = builder.inputRef<any>("ReverseTransactionWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: false }),
    unassignedDestinyId: t.field({ type: "ID", required: false }),
  }),
});
