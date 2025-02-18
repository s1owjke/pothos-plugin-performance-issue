import { builder } from "src/builder";

import { InfiniteScrollLogCreateWithoutEmotionalSupportTables } from "./createWithoutEmotionalSupportTables";
import { InfiniteScrollLogWhereUnique } from "./whereUnique";

export const InfiniteScrollLogCreateRelationWithoutEmotionalSupportTables = builder
  .inputRef<any>("InfiniteScrollLogCreateRelationWithoutEmotionalSupportTables")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: InfiniteScrollLogWhereUnique }),
      create: t.field({ type: InfiniteScrollLogCreateWithoutEmotionalSupportTables }),
    }),
  });
