import { builder } from "src/builder";

import { InfiniteUndoCreate } from "./create";
import { InfiniteUndoUpdate } from "./update";
import { InfiniteUndoWhereUnique } from "./whereUnique";

export const InfiniteUndoUpdateRelation = builder.inputRef<any>("InfiniteUndoUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: InfiniteUndoWhereUnique }),
    disconnect: t.field({ type: InfiniteUndoWhereUnique }),
    create: t.field({ type: InfiniteUndoCreate }),
    update: t.field({ type: InfiniteUndoUpdate }),
  }),
});
