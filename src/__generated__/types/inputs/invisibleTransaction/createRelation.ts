import { builder } from "src/builder";

import { InvisibleTransactionCreate } from "./create";
import { InvisibleTransactionWhereUnique } from "./whereUnique";

export const InvisibleTransactionCreateRelation = builder.inputRef<any>("InvisibleTransactionCreateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: InvisibleTransactionWhereUnique }),
    create: t.field({ type: InvisibleTransactionCreate }),
  }),
});
