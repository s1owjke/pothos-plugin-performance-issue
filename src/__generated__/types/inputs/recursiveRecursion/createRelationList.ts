import { builder } from "src/builder";

import { RecursiveRecursionCreate } from "./create";
import { RecursiveRecursionWhereUnique } from "./whereUnique";

export const RecursiveRecursionCreateRelationList = builder.inputRef<any>("RecursiveRecursionCreateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [RecursiveRecursionWhereUnique] }),
    create: t.field({ type: [RecursiveRecursionCreate] }),
  }),
});
