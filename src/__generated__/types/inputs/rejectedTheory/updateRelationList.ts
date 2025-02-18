import { builder } from "src/builder";

import { RejectedTheoryCreate } from "./create";
import { RejectedTheoryWhereUnique } from "./whereUnique";

export const RejectedTheoryUpdateRelationList = builder.inputRef<any>("RejectedTheoryUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [RejectedTheoryWhereUnique] }),
    set: t.field({ type: [RejectedTheoryWhereUnique] }),
    disconnect: t.field({ type: [RejectedTheoryWhereUnique] }),
    create: t.field({ type: [RejectedTheoryCreate] }),
  }),
});
