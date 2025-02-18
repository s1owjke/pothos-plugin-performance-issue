import { builder } from "src/builder";

import { InfiniteUndoCreateWithoutHypotheticalRevenue } from "./createWithoutHypotheticalRevenue";
import { InfiniteUndoWhereUnique } from "./whereUnique";

export const InfiniteUndoUpdateRelationListWithoutHypotheticalRevenue = builder
  .inputRef<any>("InfiniteUndoUpdateRelationListWithoutHypotheticalRevenue")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [InfiniteUndoWhereUnique] }),
      set: t.field({ type: [InfiniteUndoWhereUnique] }),
      disconnect: t.field({ type: [InfiniteUndoWhereUnique] }),
      create: t.field({ type: [InfiniteUndoCreateWithoutHypotheticalRevenue] }),
    }),
  });
