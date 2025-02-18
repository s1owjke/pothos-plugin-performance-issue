import { builder } from "src/builder";

import { ThoughtCacheCreate } from "./create";
import { ThoughtCacheWhereUnique } from "./whereUnique";

export const ThoughtCacheUpdateRelationList = builder.inputRef<any>("ThoughtCacheUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [ThoughtCacheWhereUnique] }),
    set: t.field({ type: [ThoughtCacheWhereUnique] }),
    disconnect: t.field({ type: [ThoughtCacheWhereUnique] }),
    create: t.field({ type: [ThoughtCacheCreate] }),
  }),
});
