import { builder } from "src/builder";

import { ReverseTransactionCreateWithoutUnstableFrequency2 } from "./createWithoutUnstableFrequency2";
import { ReverseTransactionWhereUnique } from "./whereUnique";

export const ReverseTransactionCreateRelationWithoutUnstableFrequency2 = builder
  .inputRef<any>("ReverseTransactionCreateRelationWithoutUnstableFrequency2")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ReverseTransactionWhereUnique }),
      create: t.field({ type: ReverseTransactionCreateWithoutUnstableFrequency2 }),
    }),
  });
