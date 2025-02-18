import { builder } from "src/builder";

import { ReverseTransactionCreateWithoutUnstableFrequency2 } from "./createWithoutUnstableFrequency2";
import { ReverseTransactionUpdateWithoutUnstableFrequency2 } from "./updateWithoutUnstableFrequency2";
import { ReverseTransactionWhereUnique } from "./whereUnique";

export const ReverseTransactionUpdateRelationWithoutUnstableFrequency2 = builder
  .inputRef<any>("ReverseTransactionUpdateRelationWithoutUnstableFrequency2")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ReverseTransactionWhereUnique }),
      disconnect: t.field({ type: ReverseTransactionWhereUnique }),
      create: t.field({ type: ReverseTransactionCreateWithoutUnstableFrequency2 }),
      update: t.field({ type: ReverseTransactionUpdateWithoutUnstableFrequency2 }),
    }),
  });
