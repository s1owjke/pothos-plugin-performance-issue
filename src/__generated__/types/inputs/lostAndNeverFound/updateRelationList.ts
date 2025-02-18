import { builder } from "src/builder";

import { LostAndNeverFoundCreate } from "./create";
import { LostAndNeverFoundWhereUnique } from "./whereUnique";

export const LostAndNeverFoundUpdateRelationList = builder.inputRef<any>("LostAndNeverFoundUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [LostAndNeverFoundWhereUnique] }),
    set: t.field({ type: [LostAndNeverFoundWhereUnique] }),
    disconnect: t.field({ type: [LostAndNeverFoundWhereUnique] }),
    create: t.field({ type: [LostAndNeverFoundCreate] }),
  }),
});
