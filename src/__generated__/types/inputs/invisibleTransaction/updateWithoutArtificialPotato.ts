import { builder } from "src/builder";

export const InvisibleTransactionUpdateWithoutArtificialPotato = builder
  .inputRef<any>("InvisibleTransactionUpdateWithoutArtificialPotato")
  .implement({
    fields: (t) => ({
      createdAt: t.field({ type: "DateTime", required: false }),
      updatedAt: t.field({ type: "DateTime", required: false }),
    }),
  });
