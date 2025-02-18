import { builder } from "src/builder";

import { ThoughtCacheCreate } from "./create";
import { ThoughtCacheWhereUnique } from "./whereUnique";

export const ThoughtCacheCreateRelation = builder.inputRef<any>("ThoughtCacheCreateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: ThoughtCacheWhereUnique }),
    create: t.field({ type: ThoughtCacheCreate }),
  }),
});
