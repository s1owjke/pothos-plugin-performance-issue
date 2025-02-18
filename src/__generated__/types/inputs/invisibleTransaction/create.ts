import { builder } from "src/builder";

import { ArtificialPotatoCreateRelationWithoutInvisibleTransaction } from "../artificialPotato/createRelationWithoutInvisibleTransaction";

export const InvisibleTransactionCreate = builder.inputRef<any>("InvisibleTransactionCreate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    artificialPotato: t.field({
      type: ArtificialPotatoCreateRelationWithoutInvisibleTransaction,
      required: true,
    }),
  }),
});
