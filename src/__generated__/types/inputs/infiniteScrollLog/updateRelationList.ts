import { builder } from "src/builder";

import { InfiniteScrollLogCreate } from "./create";
import { InfiniteScrollLogWhereUnique } from "./whereUnique";

export const InfiniteScrollLogUpdateRelationList = builder.inputRef<any>("InfiniteScrollLogUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [InfiniteScrollLogWhereUnique] }),
    set: t.field({ type: [InfiniteScrollLogWhereUnique] }),
    disconnect: t.field({ type: [InfiniteScrollLogWhereUnique] }),
    create: t.field({ type: [InfiniteScrollLogCreate] }),
  }),
});
