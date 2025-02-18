import { builder } from "src/builder";

import { ReverseTransactionCreate } from "./create";
import { ReverseTransactionWhereUnique } from "./whereUnique";

export const ReverseTransactionUpdateRelationList = builder.inputRef<any>("ReverseTransactionUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [ReverseTransactionWhereUnique] }),
    set: t.field({ type: [ReverseTransactionWhereUnique] }),
    disconnect: t.field({ type: [ReverseTransactionWhereUnique] }),
    create: t.field({ type: [ReverseTransactionCreate] }),
  }),
});
