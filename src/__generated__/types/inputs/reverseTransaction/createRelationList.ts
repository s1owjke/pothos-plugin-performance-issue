import { builder } from "src/builder";

import { ReverseTransactionCreate } from "./create";
import { ReverseTransactionWhereUnique } from "./whereUnique";

export const ReverseTransactionCreateRelationList = builder.inputRef<any>("ReverseTransactionCreateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [ReverseTransactionWhereUnique] }),
    create: t.field({ type: [ReverseTransactionCreate] }),
  }),
});
