import { builder } from "src/builder";

export const InvisibleTransactionCreateWithoutArtificialPotato = builder
  .inputRef<any>("InvisibleTransactionCreateWithoutArtificialPotato")
  .implement({
    fields: (t) => ({
      createdAt: t.field({ type: "DateTime", required: true }),
      updatedAt: t.field({ type: "DateTime", required: true }),
    }),
  });
