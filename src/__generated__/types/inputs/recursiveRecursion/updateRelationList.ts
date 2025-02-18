import { builder } from "src/builder";

import { RecursiveRecursionCreate } from "./create";
import { RecursiveRecursionWhereUnique } from "./whereUnique";

export const RecursiveRecursionUpdateRelationList = builder.inputRef<any>("RecursiveRecursionUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [RecursiveRecursionWhereUnique] }),
    set: t.field({ type: [RecursiveRecursionWhereUnique] }),
    disconnect: t.field({ type: [RecursiveRecursionWhereUnique] }),
    create: t.field({ type: [RecursiveRecursionCreate] }),
  }),
});
