import { builder } from "src/builder";

import { ArtificialPotatoUpdateRelationWithoutInvisibleTransaction } from "../artificialPotato/updateRelationWithoutInvisibleTransaction";

export const InvisibleTransactionUpdate = builder.inputRef<any>("InvisibleTransactionUpdate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    artificialPotato: t.field({
      type: ArtificialPotatoUpdateRelationWithoutInvisibleTransaction,
      required: false,
    }),
  }),
});
