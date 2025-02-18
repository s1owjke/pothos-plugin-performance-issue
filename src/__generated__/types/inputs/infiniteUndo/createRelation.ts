import { builder } from "src/builder";

import { InfiniteUndoCreate } from "./create";
import { InfiniteUndoWhereUnique } from "./whereUnique";

export const InfiniteUndoCreateRelation = builder.inputRef<any>("InfiniteUndoCreateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: InfiniteUndoWhereUnique }),
    create: t.field({ type: InfiniteUndoCreate }),
  }),
});
