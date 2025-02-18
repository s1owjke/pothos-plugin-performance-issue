import { builder } from "src/builder";

import { InfiniteScrollLogCreateWithoutEmotionalSupportTables } from "./createWithoutEmotionalSupportTables";
import { InfiniteScrollLogUpdateWithoutEmotionalSupportTables } from "./updateWithoutEmotionalSupportTables";
import { InfiniteScrollLogWhereUnique } from "./whereUnique";

export const InfiniteScrollLogUpdateRelationWithoutEmotionalSupportTables = builder
  .inputRef<any>("InfiniteScrollLogUpdateRelationWithoutEmotionalSupportTables")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: InfiniteScrollLogWhereUnique }),
      disconnect: t.field({ type: InfiniteScrollLogWhereUnique }),
      create: t.field({ type: InfiniteScrollLogCreateWithoutEmotionalSupportTables }),
      update: t.field({ type: InfiniteScrollLogUpdateWithoutEmotionalSupportTables }),
    }),
  });
