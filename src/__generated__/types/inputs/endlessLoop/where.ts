import { builder } from "src/builder";

import { DateTimeFilter } from "../dateTimeFilter";
import { GravityOverrideWhere } from "../gravityOverride/where";
import { IdFilter } from "../idFilter";
import { PocketUniverseWhereRelationList } from "../pocketUniverse/whereRelationList";

export const EndlessLoopWhere = builder.inputRef<any>("EndlessLoopWhere").implement({
  fields: (t) => ({
    id: t.field({ type: IdFilter, required: false }),
    createdAt: t.field({ type: DateTimeFilter, required: false }),
    updatedAt: t.field({ type: DateTimeFilter, required: false }),
    gravityOverride: t.field({ type: GravityOverrideWhere, required: false }),
    gravityOverrideId: t.field({ type: IdFilter, required: false }),
    pocketUniverses: t.field({ type: PocketUniverseWhereRelationList, required: false }),
    AND: t.field({ type: [EndlessLoopWhere], required: false }),
    OR: t.field({ type: [EndlessLoopWhere], required: false }),
    NOT: t.field({ type: [EndlessLoopWhere], required: false }),
  }),
});
