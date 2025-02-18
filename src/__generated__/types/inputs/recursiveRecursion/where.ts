import { builder } from "src/builder";

import { DateTimeFilter } from "../dateTimeFilter";
import { GravityOverrideWhere } from "../gravityOverride/where";
import { HyperlinkedUnicornWhereRelationList } from "../hyperlinkedUnicorn/whereRelationList";
import { IdFilter } from "../idFilter";
import { SecretSauceWhereRelationList } from "../secretSauce/whereRelationList";

export const RecursiveRecursionWhere = builder.inputRef<any>("RecursiveRecursionWhere").implement({
  fields: (t) => ({
    id: t.field({ type: IdFilter, required: false }),
    createdAt: t.field({ type: DateTimeFilter, required: false }),
    updatedAt: t.field({ type: DateTimeFilter, required: false }),
    gravityOverride: t.field({ type: GravityOverrideWhere, required: false }),
    gravityOverrideId: t.field({ type: IdFilter, required: false }),
    hyperlinkedUnicorns: t.field({ type: HyperlinkedUnicornWhereRelationList, required: false }),
    secretSauces: t.field({ type: SecretSauceWhereRelationList, required: false }),
    AND: t.field({ type: [RecursiveRecursionWhere], required: false }),
    OR: t.field({ type: [RecursiveRecursionWhere], required: false }),
    NOT: t.field({ type: [RecursiveRecursionWhere], required: false }),
  }),
});
