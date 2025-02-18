import { builder } from "src/builder";

import { EndlessLoopCreate } from "./create";
import { EndlessLoopWhereUnique } from "./whereUnique";

export const EndlessLoopCreateRelationList = builder.inputRef<any>("EndlessLoopCreateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [EndlessLoopWhereUnique] }),
    create: t.field({ type: [EndlessLoopCreate] }),
  }),
});
