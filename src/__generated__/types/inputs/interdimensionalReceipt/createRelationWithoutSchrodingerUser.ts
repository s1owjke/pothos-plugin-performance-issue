import { builder } from "src/builder";

import { InterdimensionalReceiptCreateWithoutSchrodingerUser } from "./createWithoutSchrodingerUser";
import { InterdimensionalReceiptWhereUnique } from "./whereUnique";

export const InterdimensionalReceiptCreateRelationWithoutSchrodingerUser = builder
  .inputRef<any>("InterdimensionalReceiptCreateRelationWithoutSchrodingerUser")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: InterdimensionalReceiptWhereUnique }),
      create: t.field({ type: InterdimensionalReceiptCreateWithoutSchrodingerUser }),
    }),
  });
