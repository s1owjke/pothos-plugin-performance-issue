import { builder } from "src/builder";

import { ReverseTransactionCreateWithoutGravityOverrides } from "./createWithoutGravityOverrides";
import { ReverseTransactionWhereUnique } from "./whereUnique";

export const ReverseTransactionUpdateRelationListWithoutGravityOverrides = builder
  .inputRef<any>("ReverseTransactionUpdateRelationListWithoutGravityOverrides")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ReverseTransactionWhereUnique] }),
      set: t.field({ type: [ReverseTransactionWhereUnique] }),
      disconnect: t.field({ type: [ReverseTransactionWhereUnique] }),
      create: t.field({ type: [ReverseTransactionCreateWithoutGravityOverrides] }),
    }),
  });
