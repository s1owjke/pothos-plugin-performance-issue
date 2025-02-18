import { builder } from "src/builder";

import { RedundantDuplicationCreate } from "./create";
import { RedundantDuplicationWhereUnique } from "./whereUnique";

export const RedundantDuplicationCreateRelationList = builder.inputRef<any>("RedundantDuplicationCreateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [RedundantDuplicationWhereUnique] }),
    create: t.field({ type: [RedundantDuplicationCreate] }),
  }),
});
