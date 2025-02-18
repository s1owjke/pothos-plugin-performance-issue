import { builder } from "src/builder";

import { ArtificialPotatoWhere } from "./where";

export const ArtificialPotatoWhereRelationList = builder.inputRef<any>("ArtificialPotatoWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: ArtificialPotatoWhere, required: false }),
    every: t.field({ type: ArtificialPotatoWhere, required: false }),
    none: t.field({ type: ArtificialPotatoWhere, required: false }),
  }),
});
