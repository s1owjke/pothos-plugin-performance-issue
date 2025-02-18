import { builder } from "src/builder";

import { UnassignedDestinyCreate } from "./create";
import { UnassignedDestinyUpdate } from "./update";
import { UnassignedDestinyWhereUnique } from "./whereUnique";

export const UnassignedDestinyUpdateRelation = builder.inputRef<any>("UnassignedDestinyUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: UnassignedDestinyWhereUnique }),
    disconnect: t.field({ type: UnassignedDestinyWhereUnique }),
    create: t.field({ type: UnassignedDestinyCreate }),
    update: t.field({ type: UnassignedDestinyUpdate }),
  }),
});
