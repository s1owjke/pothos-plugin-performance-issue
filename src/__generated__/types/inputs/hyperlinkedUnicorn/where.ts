import { builder } from "src/builder";

import { DateTimeFilter } from "../dateTimeFilter";
import { GravityOverrideWhere } from "../gravityOverride/where";
import { IdFilter } from "../idFilter";
import { RecursiveRecursionWhereRelationList } from "../recursiveRecursion/whereRelationList";

export const HyperlinkedUnicornWhere = builder.inputRef<any>("HyperlinkedUnicornWhere").implement({
  fields: (t) => ({
    id: t.field({ type: IdFilter, required: false }),
    createdAt: t.field({ type: DateTimeFilter, required: false }),
    updatedAt: t.field({ type: DateTimeFilter, required: false }),
    gravityOverride: t.field({ type: GravityOverrideWhere, required: false }),
    gravityOverrideId: t.field({ type: IdFilter, required: false }),
    recursiveRecursions: t.field({ type: RecursiveRecursionWhereRelationList, required: false }),
    AND: t.field({ type: [HyperlinkedUnicornWhere], required: false }),
    OR: t.field({ type: [HyperlinkedUnicornWhere], required: false }),
    NOT: t.field({ type: [HyperlinkedUnicornWhere], required: false }),
  }),
});
