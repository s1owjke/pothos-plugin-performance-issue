import { builder } from "src/builder";

import { InfiniteUndoCreate } from "./create";
import { InfiniteUndoWhereUnique } from "./whereUnique";

export const InfiniteUndoCreateRelationList = builder.inputRef<any>("InfiniteUndoCreateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [InfiniteUndoWhereUnique] }),
    create: t.field({ type: [InfiniteUndoCreate] }),
  }),
});
