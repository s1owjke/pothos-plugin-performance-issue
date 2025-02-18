import { builder } from "src/builder";

import { LostAndNeverFoundCreate } from "./create";
import { LostAndNeverFoundUpdate } from "./update";
import { LostAndNeverFoundWhereUnique } from "./whereUnique";

export const LostAndNeverFoundUpdateRelation = builder.inputRef<any>("LostAndNeverFoundUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: LostAndNeverFoundWhereUnique }),
    disconnect: t.field({ type: LostAndNeverFoundWhereUnique }),
    create: t.field({ type: LostAndNeverFoundCreate }),
    update: t.field({ type: LostAndNeverFoundUpdate }),
  }),
});
