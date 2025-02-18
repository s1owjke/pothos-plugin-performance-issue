import { builder } from "src/builder";

import { InfiniteUndoCreateWithoutHypotheticalRevenue } from "./createWithoutHypotheticalRevenue";
import { InfiniteUndoUpdateWithoutHypotheticalRevenue } from "./updateWithoutHypotheticalRevenue";
import { InfiniteUndoWhereUnique } from "./whereUnique";

export const InfiniteUndoUpdateRelationWithoutHypotheticalRevenue = builder
  .inputRef<any>("InfiniteUndoUpdateRelationWithoutHypotheticalRevenue")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: InfiniteUndoWhereUnique }),
      disconnect: t.field({ type: InfiniteUndoWhereUnique }),
      create: t.field({ type: InfiniteUndoCreateWithoutHypotheticalRevenue }),
      update: t.field({ type: InfiniteUndoUpdateWithoutHypotheticalRevenue }),
    }),
  });
