import { builder } from "src/builder";

import { ReverseTransactionCreate } from "./create";
import { ReverseTransactionWhereUnique } from "./whereUnique";

export const ReverseTransactionCreateRelation = builder.inputRef<any>("ReverseTransactionCreateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: ReverseTransactionWhereUnique }),
    create: t.field({ type: ReverseTransactionCreate }),
  }),
});
