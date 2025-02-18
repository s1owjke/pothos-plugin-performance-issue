import { builder } from "src/builder";

import { ReverseTransactionCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { ReverseTransactionWhereUnique } from "./whereUnique";

export const ReverseTransactionUpdateRelationListWithoutUnstableFrequency = builder
  .inputRef<any>("ReverseTransactionUpdateRelationListWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ReverseTransactionWhereUnique] }),
      set: t.field({ type: [ReverseTransactionWhereUnique] }),
      disconnect: t.field({ type: [ReverseTransactionWhereUnique] }),
      create: t.field({ type: [ReverseTransactionCreateWithoutUnstableFrequency] }),
    }),
  });
