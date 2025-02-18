import { builder } from "src/builder";

export const InvisibleTransactionWhereUnique = builder.inputRef<any>("InvisibleTransactionWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: false }),
    artificialPotatoId: t.field({ type: "ID", required: false }),
  }),
});
