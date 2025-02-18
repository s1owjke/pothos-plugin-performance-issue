import { builder } from "src/builder";

import { InfiniteUndoCreateWithoutVortexReport } from "./createWithoutVortexReport";
import { InfiniteUndoWhereUnique } from "./whereUnique";

export const InfiniteUndoUpdateRelationListWithoutVortexReport = builder
  .inputRef<any>("InfiniteUndoUpdateRelationListWithoutVortexReport")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [InfiniteUndoWhereUnique] }),
      set: t.field({ type: [InfiniteUndoWhereUnique] }),
      disconnect: t.field({ type: [InfiniteUndoWhereUnique] }),
      create: t.field({ type: [InfiniteUndoCreateWithoutVortexReport] }),
    }),
  });
