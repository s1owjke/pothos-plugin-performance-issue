import { builder } from "src/builder";

import { ReverseTransactionCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { ReverseTransactionUpdateWithoutUnstableFrequency } from "./updateWithoutUnstableFrequency";
import { ReverseTransactionWhereUnique } from "./whereUnique";

export const ReverseTransactionUpdateRelationWithoutUnstableFrequency = builder
  .inputRef<any>("ReverseTransactionUpdateRelationWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ReverseTransactionWhereUnique }),
      disconnect: t.field({ type: ReverseTransactionWhereUnique }),
      create: t.field({ type: ReverseTransactionCreateWithoutUnstableFrequency }),
      update: t.field({ type: ReverseTransactionUpdateWithoutUnstableFrequency }),
    }),
  });
