import { builder } from "src/builder";

import { DateTimeFilter } from "../dateTimeFilter";
import { EndlessLoopWhereRelationList } from "../endlessLoop/whereRelationList";
import { GravityOverrideWhere } from "../gravityOverride/where";
import { IdFilter } from "../idFilter";
import { OverdueRevolutionWhereRelationList } from "../overdueRevolution/whereRelationList";

export const PocketUniverseWhere = builder.inputRef<any>("PocketUniverseWhere").implement({
  fields: (t) => ({
    id: t.field({ type: IdFilter, required: false }),
    createdAt: t.field({ type: DateTimeFilter, required: false }),
    updatedAt: t.field({ type: DateTimeFilter, required: false }),
    endlessLoops: t.field({ type: EndlessLoopWhereRelationList, required: false }),
    gravityOverride: t.field({ type: GravityOverrideWhere, required: false }),
    gravityOverrideId: t.field({ type: IdFilter, required: false }),
    overdueRevolutions: t.field({ type: OverdueRevolutionWhereRelationList, required: false }),
    AND: t.field({ type: [PocketUniverseWhere], required: false }),
    OR: t.field({ type: [PocketUniverseWhere], required: false }),
    NOT: t.field({ type: [PocketUniverseWhere], required: false }),
  }),
});
