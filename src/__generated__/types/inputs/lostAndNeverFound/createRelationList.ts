import { builder } from "src/builder";

import { LostAndNeverFoundCreate } from "./create";
import { LostAndNeverFoundWhereUnique } from "./whereUnique";

export const LostAndNeverFoundCreateRelationList = builder.inputRef<any>("LostAndNeverFoundCreateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [LostAndNeverFoundWhereUnique] }),
    create: t.field({ type: [LostAndNeverFoundCreate] }),
  }),
});
