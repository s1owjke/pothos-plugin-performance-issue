import { builder } from "src/builder";

import { RedundantDuplicationCreate } from "./create";
import { RedundantDuplicationUpdate } from "./update";
import { RedundantDuplicationWhereUnique } from "./whereUnique";

export const RedundantDuplicationUpdateRelation = builder.inputRef<any>("RedundantDuplicationUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: RedundantDuplicationWhereUnique }),
    disconnect: t.field({ type: RedundantDuplicationWhereUnique }),
    create: t.field({ type: RedundantDuplicationCreate }),
    update: t.field({ type: RedundantDuplicationUpdate }),
  }),
});
