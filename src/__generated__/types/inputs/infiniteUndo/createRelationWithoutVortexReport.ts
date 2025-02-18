import { builder } from "src/builder";

import { InfiniteUndoCreateWithoutVortexReport } from "./createWithoutVortexReport";
import { InfiniteUndoWhereUnique } from "./whereUnique";

export const InfiniteUndoCreateRelationWithoutVortexReport = builder.inputRef<any>("InfiniteUndoCreateRelationWithoutVortexReport").implement({
  fields: (t) => ({
    connect: t.field({ type: InfiniteUndoWhereUnique }),
    create: t.field({ type: InfiniteUndoCreateWithoutVortexReport }),
  }),
});
