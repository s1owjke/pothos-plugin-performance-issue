import { builder } from "src/builder";

import { InterdimensionalReceiptCreateWithoutSchrodingerUser } from "./createWithoutSchrodingerUser";
import { InterdimensionalReceiptUpdateWithoutSchrodingerUser } from "./updateWithoutSchrodingerUser";
import { InterdimensionalReceiptWhereUnique } from "./whereUnique";

export const InterdimensionalReceiptUpdateRelationWithoutSchrodingerUser = builder
  .inputRef<any>("InterdimensionalReceiptUpdateRelationWithoutSchrodingerUser")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: InterdimensionalReceiptWhereUnique }),
      disconnect: t.field({ type: InterdimensionalReceiptWhereUnique }),
      create: t.field({ type: InterdimensionalReceiptCreateWithoutSchrodingerUser }),
      update: t.field({ type: InterdimensionalReceiptUpdateWithoutSchrodingerUser }),
    }),
  });
