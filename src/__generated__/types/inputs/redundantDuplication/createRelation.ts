import { builder } from "src/builder";

import { RedundantDuplicationCreate } from "./create";
import { RedundantDuplicationWhereUnique } from "./whereUnique";

export const RedundantDuplicationCreateRelation = builder.inputRef<any>("RedundantDuplicationCreateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: RedundantDuplicationWhereUnique }),
    create: t.field({ type: RedundantDuplicationCreate }),
  }),
});
