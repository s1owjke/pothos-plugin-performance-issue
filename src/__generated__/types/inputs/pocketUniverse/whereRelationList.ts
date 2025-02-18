import { builder } from "src/builder";

import { PocketUniverseWhere } from "./where";

export const PocketUniverseWhereRelationList = builder.inputRef<any>("PocketUniverseWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: PocketUniverseWhere, required: false }),
    every: t.field({ type: PocketUniverseWhere, required: false }),
    none: t.field({ type: PocketUniverseWhere, required: false }),
  }),
});
