import { builder } from "src/builder";

import { InfiniteScrollLogCreate } from "./create";
import { InfiniteScrollLogUpdate } from "./update";
import { InfiniteScrollLogWhereUnique } from "./whereUnique";

export const InfiniteScrollLogUpdateRelation = builder.inputRef<any>("InfiniteScrollLogUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: InfiniteScrollLogWhereUnique }),
    disconnect: t.field({ type: InfiniteScrollLogWhereUnique }),
    create: t.field({ type: InfiniteScrollLogCreate }),
    update: t.field({ type: InfiniteScrollLogUpdate }),
  }),
});
