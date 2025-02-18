import { builder } from "src/builder";

import { ThoughtCacheCreate } from "./create";
import { ThoughtCacheWhereUnique } from "./whereUnique";

export const ThoughtCacheCreateRelationList = builder.inputRef<any>("ThoughtCacheCreateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [ThoughtCacheWhereUnique] }),
    create: t.field({ type: [ThoughtCacheCreate] }),
  }),
});
