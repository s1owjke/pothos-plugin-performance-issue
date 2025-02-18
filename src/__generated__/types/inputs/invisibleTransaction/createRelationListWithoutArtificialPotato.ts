import { builder } from "src/builder";

import { InvisibleTransactionCreateWithoutArtificialPotato } from "./createWithoutArtificialPotato";
import { InvisibleTransactionWhereUnique } from "./whereUnique";

export const InvisibleTransactionCreateRelationListWithoutArtificialPotato = builder
  .inputRef<any>("InvisibleTransactionCreateRelationListWithoutArtificialPotato")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [InvisibleTransactionWhereUnique] }),
      create: t.field({ type: [InvisibleTransactionCreateWithoutArtificialPotato] }),
    }),
  });
