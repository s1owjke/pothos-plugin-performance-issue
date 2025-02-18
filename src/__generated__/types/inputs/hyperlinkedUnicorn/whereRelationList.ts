import { builder } from "src/builder";

import { HyperlinkedUnicornWhere } from "./where";

export const HyperlinkedUnicornWhereRelationList = builder.inputRef<any>("HyperlinkedUnicornWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: HyperlinkedUnicornWhere, required: false }),
    every: t.field({ type: HyperlinkedUnicornWhere, required: false }),
    none: t.field({ type: HyperlinkedUnicornWhere, required: false }),
  }),
});
