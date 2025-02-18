import { builder } from "src/builder";

import { UnassignedDestinyCreate } from "./create";
import { UnassignedDestinyWhereUnique } from "./whereUnique";

export const UnassignedDestinyCreateRelation = builder.inputRef<any>("UnassignedDestinyCreateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: UnassignedDestinyWhereUnique }),
    create: t.field({ type: UnassignedDestinyCreate }),
  }),
});
