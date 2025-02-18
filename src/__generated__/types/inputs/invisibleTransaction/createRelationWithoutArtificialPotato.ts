import { builder } from "src/builder";

import { InvisibleTransactionCreateWithoutArtificialPotato } from "./createWithoutArtificialPotato";
import { InvisibleTransactionWhereUnique } from "./whereUnique";

export const InvisibleTransactionCreateRelationWithoutArtificialPotato = builder
  .inputRef<any>("InvisibleTransactionCreateRelationWithoutArtificialPotato")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: InvisibleTransactionWhereUnique }),
      create: t.field({ type: InvisibleTransactionCreateWithoutArtificialPotato }),
    }),
  });
