import { builder } from "src/builder";

import { InvisibleTransactionCreateWithoutArtificialPotato } from "./createWithoutArtificialPotato";
import { InvisibleTransactionUpdateWithoutArtificialPotato } from "./updateWithoutArtificialPotato";
import { InvisibleTransactionWhereUnique } from "./whereUnique";

export const InvisibleTransactionUpdateRelationWithoutArtificialPotato = builder
  .inputRef<any>("InvisibleTransactionUpdateRelationWithoutArtificialPotato")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: InvisibleTransactionWhereUnique }),
      disconnect: t.field({ type: InvisibleTransactionWhereUnique }),
      create: t.field({ type: InvisibleTransactionCreateWithoutArtificialPotato }),
      update: t.field({ type: InvisibleTransactionUpdateWithoutArtificialPotato }),
    }),
  });
