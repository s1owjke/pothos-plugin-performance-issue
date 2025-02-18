import { builder } from "src/builder";

import { ReverseTransactionCreate } from "./create";
import { ReverseTransactionUpdate } from "./update";
import { ReverseTransactionWhereUnique } from "./whereUnique";

export const ReverseTransactionUpdateRelation = builder.inputRef<any>("ReverseTransactionUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: ReverseTransactionWhereUnique }),
    disconnect: t.field({ type: ReverseTransactionWhereUnique }),
    create: t.field({ type: ReverseTransactionCreate }),
    update: t.field({ type: ReverseTransactionUpdate }),
  }),
});
