import { builder } from "src/builder";

import { InfiniteScrollLogCreate } from "./create";
import { InfiniteScrollLogWhereUnique } from "./whereUnique";

export const InfiniteScrollLogCreateRelation = builder.inputRef<any>("InfiniteScrollLogCreateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: InfiniteScrollLogWhereUnique }),
    create: t.field({ type: InfiniteScrollLogCreate }),
  }),
});
