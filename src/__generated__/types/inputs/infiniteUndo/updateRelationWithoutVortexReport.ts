import { builder } from "src/builder";

import { InfiniteUndoCreateWithoutVortexReport } from "./createWithoutVortexReport";
import { InfiniteUndoUpdateWithoutVortexReport } from "./updateWithoutVortexReport";
import { InfiniteUndoWhereUnique } from "./whereUnique";

export const InfiniteUndoUpdateRelationWithoutVortexReport = builder.inputRef<any>("InfiniteUndoUpdateRelationWithoutVortexReport").implement({
  fields: (t) => ({
    connect: t.field({ type: InfiniteUndoWhereUnique }),
    disconnect: t.field({ type: InfiniteUndoWhereUnique }),
    create: t.field({ type: InfiniteUndoCreateWithoutVortexReport }),
    update: t.field({ type: InfiniteUndoUpdateWithoutVortexReport }),
  }),
});
