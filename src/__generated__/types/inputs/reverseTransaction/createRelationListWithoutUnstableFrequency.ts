import { builder } from "src/builder";

import { ReverseTransactionCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { ReverseTransactionWhereUnique } from "./whereUnique";

export const ReverseTransactionCreateRelationListWithoutUnstableFrequency = builder
  .inputRef<any>("ReverseTransactionCreateRelationListWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ReverseTransactionWhereUnique] }),
      create: t.field({ type: [ReverseTransactionCreateWithoutUnstableFrequency] }),
    }),
  });
