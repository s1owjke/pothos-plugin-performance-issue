import { builder } from "src/builder";

import { EndlessLoopCreate } from "./create";
import { EndlessLoopWhereUnique } from "./whereUnique";

export const EndlessLoopUpdateRelationList = builder.inputRef<any>("EndlessLoopUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [EndlessLoopWhereUnique] }),
    set: t.field({ type: [EndlessLoopWhereUnique] }),
    disconnect: t.field({ type: [EndlessLoopWhereUnique] }),
    create: t.field({ type: [EndlessLoopCreate] }),
  }),
});
