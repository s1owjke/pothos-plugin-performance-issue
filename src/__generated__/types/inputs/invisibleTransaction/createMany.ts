import { builder } from "src/builder";

export const InvisibleTransactionCreateMany = builder.inputRef<any>("InvisibleTransactionCreateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    artificialPotatoId: t.field({ type: "ID", required: true }),
  }),
});
