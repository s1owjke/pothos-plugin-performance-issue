import { builder } from "src/builder";

import { InterdimensionalReceiptCreateWithoutSchrodingerUser } from "./createWithoutSchrodingerUser";
import { InterdimensionalReceiptWhereUnique } from "./whereUnique";

export const InterdimensionalReceiptUpdateRelationListWithoutSchrodingerUser = builder
  .inputRef<any>("InterdimensionalReceiptUpdateRelationListWithoutSchrodingerUser")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [InterdimensionalReceiptWhereUnique] }),
      set: t.field({ type: [InterdimensionalReceiptWhereUnique] }),
      disconnect: t.field({ type: [InterdimensionalReceiptWhereUnique] }),
      create: t.field({ type: [InterdimensionalReceiptCreateWithoutSchrodingerUser] }),
    }),
  });
