import { builder } from "src/builder";

import { DateTimeFilter } from "../dateTimeFilter";
import { GravityOverrideWhere } from "../gravityOverride/where";
import { IdFilter } from "../idFilter";
import { PortalIndexWhere } from "../portalIndex/where";
import { SpontaneousCombustionWhereRelationList } from "../spontaneousCombustion/whereRelationList";

export const MissingContextWhere = builder.inputRef<any>("MissingContextWhere").implement({
  fields: (t) => ({
    id: t.field({ type: IdFilter, required: false }),
    createdAt: t.field({ type: DateTimeFilter, required: false }),
    updatedAt: t.field({ type: DateTimeFilter, required: false }),
    gravityOverride: t.field({ type: GravityOverrideWhere, required: false }),
    gravityOverrideId: t.field({ type: IdFilter, required: false }),
    portalIndex: t.field({ type: PortalIndexWhere, required: false }),
    portalIndexId: t.field({ type: IdFilter, required: false }),
    spontaneousCombustions: t.field({
      type: SpontaneousCombustionWhereRelationList,
      required: false,
    }),
    AND: t.field({ type: [MissingContextWhere], required: false }),
    OR: t.field({ type: [MissingContextWhere], required: false }),
    NOT: t.field({ type: [MissingContextWhere], required: false }),
  }),
});
