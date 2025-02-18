import { builder } from "src/builder";

import { InvisibleTransactionCreate } from "./create";
import { InvisibleTransactionUpdate } from "./update";
import { InvisibleTransactionWhereUnique } from "./whereUnique";

export const InvisibleTransactionUpdateRelation = builder.inputRef<any>("InvisibleTransactionUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: InvisibleTransactionWhereUnique }),
    disconnect: t.field({ type: InvisibleTransactionWhereUnique }),
    create: t.field({ type: InvisibleTransactionCreate }),
    update: t.field({ type: InvisibleTransactionUpdate }),
  }),
});
