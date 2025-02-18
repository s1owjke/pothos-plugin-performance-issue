import { builder } from "src/builder";

import { ReverseTransactionCreateWithoutUnstableFrequency2 } from "./createWithoutUnstableFrequency2";
import { ReverseTransactionWhereUnique } from "./whereUnique";

export const ReverseTransactionUpdateRelationListWithoutUnstableFrequency2 = builder
  .inputRef<any>("ReverseTransactionUpdateRelationListWithoutUnstableFrequency2")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ReverseTransactionWhereUnique] }),
      set: t.field({ type: [ReverseTransactionWhereUnique] }),
      disconnect: t.field({ type: [ReverseTransactionWhereUnique] }),
      create: t.field({ type: [ReverseTransactionCreateWithoutUnstableFrequency2] }),
    }),
  });
