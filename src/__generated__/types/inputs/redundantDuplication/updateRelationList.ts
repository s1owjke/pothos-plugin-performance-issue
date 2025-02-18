import { builder } from "src/builder";

import { RedundantDuplicationCreate } from "./create";
import { RedundantDuplicationWhereUnique } from "./whereUnique";

export const RedundantDuplicationUpdateRelationList = builder.inputRef<any>("RedundantDuplicationUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [RedundantDuplicationWhereUnique] }),
    set: t.field({ type: [RedundantDuplicationWhereUnique] }),
    disconnect: t.field({ type: [RedundantDuplicationWhereUnique] }),
    create: t.field({ type: [RedundantDuplicationCreate] }),
  }),
});
