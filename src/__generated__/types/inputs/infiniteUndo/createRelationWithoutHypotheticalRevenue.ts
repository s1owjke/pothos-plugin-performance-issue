import { builder } from "src/builder";

import { InfiniteUndoCreateWithoutHypotheticalRevenue } from "./createWithoutHypotheticalRevenue";
import { InfiniteUndoWhereUnique } from "./whereUnique";

export const InfiniteUndoCreateRelationWithoutHypotheticalRevenue = builder
  .inputRef<any>("InfiniteUndoCreateRelationWithoutHypotheticalRevenue")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: InfiniteUndoWhereUnique }),
      create: t.field({ type: InfiniteUndoCreateWithoutHypotheticalRevenue }),
    }),
  });
