import { builder } from "src/builder";

import { DateTimeFilter } from "../dateTimeFilter";
import { GravityOverrideWhere } from "../gravityOverride/where";
import { IdFilter } from "../idFilter";
import { RecursiveRecursionWhereRelationList } from "../recursiveRecursion/whereRelationList";

export const SecretSauceWhere = builder.inputRef<any>("SecretSauceWhere").implement({
  fields: (t) => ({
    id: t.field({ type: IdFilter, required: false }),
    createdAt: t.field({ type: DateTimeFilter, required: false }),
    updatedAt: t.field({ type: DateTimeFilter, required: false }),
    gravityOverride: t.field({ type: GravityOverrideWhere, required: false }),
    gravityOverrideId: t.field({ type: IdFilter, required: false }),
    recursiveRecursions: t.field({ type: RecursiveRecursionWhereRelationList, required: false }),
    AND: t.field({ type: [SecretSauceWhere], required: false }),
    OR: t.field({ type: [SecretSauceWhere], required: false }),
    NOT: t.field({ type: [SecretSauceWhere], required: false }),
  }),
});
