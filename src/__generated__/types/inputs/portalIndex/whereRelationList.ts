import { builder } from "src/builder";

import { PortalIndexWhere } from "./where";

export const PortalIndexWhereRelationList = builder.inputRef<any>("PortalIndexWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: PortalIndexWhere, required: false }),
    every: t.field({ type: PortalIndexWhere, required: false }),
    none: t.field({ type: PortalIndexWhere, required: false }),
  }),
});
