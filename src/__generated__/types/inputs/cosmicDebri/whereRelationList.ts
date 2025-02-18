import { builder } from "src/builder";

import { CosmicDebriWhere } from "./where";

export const CosmicDebriWhereRelationList = builder.inputRef<any>("CosmicDebriWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: CosmicDebriWhere, required: false }),
    every: t.field({ type: CosmicDebriWhere, required: false }),
    none: t.field({ type: CosmicDebriWhere, required: false }),
  }),
});
