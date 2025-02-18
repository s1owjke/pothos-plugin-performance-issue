import { builder } from "src/builder";

import { SortOrder } from "../../../enums/sortOrder";
import { GravityOverrideOrderBy } from "../gravityOverride/orderBy";
import { PortalIndexOrderBy } from "../portalIndex/orderBy";

export const MissingContextOrderBy = builder.inputRef<any>("MissingContextOrderBy").implement({
  fields: (t) => ({
    id: t.field({ type: SortOrder, required: false }),
    createdAt: t.field({ type: SortOrder, required: false }),
    updatedAt: t.field({ type: SortOrder, required: false }),
    gravityOverride: t.field({ type: GravityOverrideOrderBy, required: false }),
    gravityOverrideId: t.field({ type: SortOrder, required: false }),
    portalIndex: t.field({ type: PortalIndexOrderBy, required: false }),
    portalIndexId: t.field({ type: SortOrder, required: false }),
  }),
});
