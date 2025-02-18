import { builder } from "src/builder";

import { InfiniteScrollLogCreateWithoutEmotionalSupportTables } from "./createWithoutEmotionalSupportTables";
import { InfiniteScrollLogWhereUnique } from "./whereUnique";

export const InfiniteScrollLogUpdateRelationListWithoutEmotionalSupportTables = builder
  .inputRef<any>("InfiniteScrollLogUpdateRelationListWithoutEmotionalSupportTables")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [InfiniteScrollLogWhereUnique] }),
      set: t.field({ type: [InfiniteScrollLogWhereUnique] }),
      disconnect: t.field({ type: [InfiniteScrollLogWhereUnique] }),
      create: t.field({ type: [InfiniteScrollLogCreateWithoutEmotionalSupportTables] }),
    }),
  });
