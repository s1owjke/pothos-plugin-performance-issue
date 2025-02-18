import { builder } from "src/builder";

import { ReverseTransactionCreateWithoutUnstableFrequency2 } from "./createWithoutUnstableFrequency2";
import { ReverseTransactionWhereUnique } from "./whereUnique";

export const ReverseTransactionCreateRelationListWithoutUnstableFrequency2 = builder
  .inputRef<any>("ReverseTransactionCreateRelationListWithoutUnstableFrequency2")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ReverseTransactionWhereUnique] }),
      create: t.field({ type: [ReverseTransactionCreateWithoutUnstableFrequency2] }),
    }),
  });
