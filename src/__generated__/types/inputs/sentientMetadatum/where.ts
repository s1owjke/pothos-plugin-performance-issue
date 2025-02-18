import { builder } from "src/builder";

import { DateTimeFilter } from "../dateTimeFilter";
import { GravityOverrideWhere } from "../gravityOverride/where";
import { IdFilter } from "../idFilter";
import { SpontaneousCombustionWhereRelationList } from "../spontaneousCombustion/whereRelationList";

export const SentientMetadatumWhere = builder.inputRef<any>("SentientMetadatumWhere").implement({
  fields: (t) => ({
    id: t.field({ type: IdFilter, required: false }),
    createdAt: t.field({ type: DateTimeFilter, required: false }),
    updatedAt: t.field({ type: DateTimeFilter, required: false }),
    gravityOverride: t.field({ type: GravityOverrideWhere, required: false }),
    gravityOverrideId: t.field({ type: IdFilter, required: false }),
    spontaneousCombustions: t.field({
      type: SpontaneousCombustionWhereRelationList,
      required: false,
    }),
    AND: t.field({ type: [SentientMetadatumWhere], required: false }),
    OR: t.field({ type: [SentientMetadatumWhere], required: false }),
    NOT: t.field({ type: [SentientMetadatumWhere], required: false }),
  }),
});
