import { builder } from "src/builder";

import { InfiniteUndoCreateWithoutHypotheticalRevenue } from "./createWithoutHypotheticalRevenue";
import { InfiniteUndoWhereUnique } from "./whereUnique";

export const InfiniteUndoCreateRelationListWithoutHypotheticalRevenue = builder
  .inputRef<any>("InfiniteUndoCreateRelationListWithoutHypotheticalRevenue")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [InfiniteUndoWhereUnique] }),
      create: t.field({ type: [InfiniteUndoCreateWithoutHypotheticalRevenue] }),
    }),
  });
