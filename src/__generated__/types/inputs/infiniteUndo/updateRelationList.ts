import { builder } from "src/builder";

import { InfiniteUndoCreate } from "./create";
import { InfiniteUndoWhereUnique } from "./whereUnique";

export const InfiniteUndoUpdateRelationList = builder.inputRef<any>("InfiniteUndoUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [InfiniteUndoWhereUnique] }),
    set: t.field({ type: [InfiniteUndoWhereUnique] }),
    disconnect: t.field({ type: [InfiniteUndoWhereUnique] }),
    create: t.field({ type: [InfiniteUndoCreate] }),
  }),
});
