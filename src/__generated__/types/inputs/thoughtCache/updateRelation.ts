import { builder } from "src/builder";

import { ThoughtCacheCreate } from "./create";
import { ThoughtCacheUpdate } from "./update";
import { ThoughtCacheWhereUnique } from "./whereUnique";

export const ThoughtCacheUpdateRelation = builder.inputRef<any>("ThoughtCacheUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: ThoughtCacheWhereUnique }),
    disconnect: t.field({ type: ThoughtCacheWhereUnique }),
    create: t.field({ type: ThoughtCacheCreate }),
    update: t.field({ type: ThoughtCacheUpdate }),
  }),
});
