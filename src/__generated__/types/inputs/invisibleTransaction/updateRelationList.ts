import { builder } from "src/builder";

import { InvisibleTransactionCreate } from "./create";
import { InvisibleTransactionWhereUnique } from "./whereUnique";

export const InvisibleTransactionUpdateRelationList = builder.inputRef<any>("InvisibleTransactionUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [InvisibleTransactionWhereUnique] }),
    set: t.field({ type: [InvisibleTransactionWhereUnique] }),
    disconnect: t.field({ type: [InvisibleTransactionWhereUnique] }),
    create: t.field({ type: [InvisibleTransactionCreate] }),
  }),
});
