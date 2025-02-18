import { builder } from "src/builder";

import { ReverseTransactionCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { ReverseTransactionWhereUnique } from "./whereUnique";

export const ReverseTransactionCreateRelationWithoutUnstableFrequency = builder
  .inputRef<any>("ReverseTransactionCreateRelationWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ReverseTransactionWhereUnique }),
      create: t.field({ type: ReverseTransactionCreateWithoutUnstableFrequency }),
    }),
  });
