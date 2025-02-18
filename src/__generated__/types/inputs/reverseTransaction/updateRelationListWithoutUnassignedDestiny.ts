import { builder } from "src/builder";

import { ReverseTransactionCreateWithoutUnassignedDestiny } from "./createWithoutUnassignedDestiny";
import { ReverseTransactionWhereUnique } from "./whereUnique";

export const ReverseTransactionUpdateRelationListWithoutUnassignedDestiny = builder
  .inputRef<any>("ReverseTransactionUpdateRelationListWithoutUnassignedDestiny")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ReverseTransactionWhereUnique] }),
      set: t.field({ type: [ReverseTransactionWhereUnique] }),
      disconnect: t.field({ type: [ReverseTransactionWhereUnique] }),
      create: t.field({ type: [ReverseTransactionCreateWithoutUnassignedDestiny] }),
    }),
  });
