import { builder } from "src/builder";

import { InterdimensionalReceiptCreateWithoutSchrodingerUser } from "./createWithoutSchrodingerUser";
import { InterdimensionalReceiptWhereUnique } from "./whereUnique";

export const InterdimensionalReceiptCreateRelationListWithoutSchrodingerUser = builder
  .inputRef<any>("InterdimensionalReceiptCreateRelationListWithoutSchrodingerUser")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [InterdimensionalReceiptWhereUnique] }),
      create: t.field({ type: [InterdimensionalReceiptCreateWithoutSchrodingerUser] }),
    }),
  });
