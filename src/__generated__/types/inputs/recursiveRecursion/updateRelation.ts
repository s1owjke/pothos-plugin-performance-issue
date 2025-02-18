import { builder } from "src/builder";

import { RecursiveRecursionCreate } from "./create";
import { RecursiveRecursionUpdate } from "./update";
import { RecursiveRecursionWhereUnique } from "./whereUnique";

export const RecursiveRecursionUpdateRelation = builder.inputRef<any>("RecursiveRecursionUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: RecursiveRecursionWhereUnique }),
    disconnect: t.field({ type: RecursiveRecursionWhereUnique }),
    create: t.field({ type: RecursiveRecursionCreate }),
    update: t.field({ type: RecursiveRecursionUpdate }),
  }),
});
