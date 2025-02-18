import { builder } from "src/builder";

import { InfiniteUndoCreateWithoutVortexReport } from "./createWithoutVortexReport";
import { InfiniteUndoWhereUnique } from "./whereUnique";

export const InfiniteUndoCreateRelationListWithoutVortexReport = builder
  .inputRef<any>("InfiniteUndoCreateRelationListWithoutVortexReport")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [InfiniteUndoWhereUnique] }),
      create: t.field({ type: [InfiniteUndoCreateWithoutVortexReport] }),
    }),
  });
