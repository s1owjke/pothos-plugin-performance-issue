import { builder } from "src/builder";

import { GlitchRegistryWhere } from "./where";

export const GlitchRegistryWhereRelationList = builder.inputRef<any>("GlitchRegistryWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: GlitchRegistryWhere, required: false }),
    every: t.field({ type: GlitchRegistryWhere, required: false }),
    none: t.field({ type: GlitchRegistryWhere, required: false }),
  }),
});
