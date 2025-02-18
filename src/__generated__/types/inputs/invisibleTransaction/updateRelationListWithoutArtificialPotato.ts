import { builder } from "src/builder";

import { InvisibleTransactionCreateWithoutArtificialPotato } from "./createWithoutArtificialPotato";
import { InvisibleTransactionWhereUnique } from "./whereUnique";

export const InvisibleTransactionUpdateRelationListWithoutArtificialPotato = builder
  .inputRef<any>("InvisibleTransactionUpdateRelationListWithoutArtificialPotato")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [InvisibleTransactionWhereUnique] }),
      set: t.field({ type: [InvisibleTransactionWhereUnique] }),
      disconnect: t.field({ type: [InvisibleTransactionWhereUnique] }),
      create: t.field({ type: [InvisibleTransactionCreateWithoutArtificialPotato] }),
    }),
  });
