import { builder } from "src/builder";

import { OverwrittenLegacyWhere } from "./where";

export const OverwrittenLegacyWhereRelationList = builder.inputRef<any>("OverwrittenLegacyWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: OverwrittenLegacyWhere, required: false }),
    every: t.field({ type: OverwrittenLegacyWhere, required: false }),
    none: t.field({ type: OverwrittenLegacyWhere, required: false }),
  }),
});
