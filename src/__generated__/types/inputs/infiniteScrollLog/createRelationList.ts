import { builder } from "src/builder";

import { InfiniteScrollLogCreate } from "./create";
import { InfiniteScrollLogWhereUnique } from "./whereUnique";

export const InfiniteScrollLogCreateRelationList = builder.inputRef<any>("InfiniteScrollLogCreateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [InfiniteScrollLogWhereUnique] }),
    create: t.field({ type: [InfiniteScrollLogCreate] }),
  }),
});
