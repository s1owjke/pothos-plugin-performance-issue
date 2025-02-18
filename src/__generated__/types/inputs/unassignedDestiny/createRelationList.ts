import { builder } from "src/builder";

import { UnassignedDestinyCreate } from "./create";
import { UnassignedDestinyWhereUnique } from "./whereUnique";

export const UnassignedDestinyCreateRelationList = builder.inputRef<any>("UnassignedDestinyCreateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [UnassignedDestinyWhereUnique] }),
    create: t.field({ type: [UnassignedDestinyCreate] }),
  }),
});
