import { builder } from "src/builder";

import { InvisibleTransactionCreate } from "./create";
import { InvisibleTransactionWhereUnique } from "./whereUnique";

export const InvisibleTransactionCreateRelationList = builder.inputRef<any>("InvisibleTransactionCreateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [InvisibleTransactionWhereUnique] }),
    create: t.field({ type: [InvisibleTransactionCreate] }),
  }),
});
