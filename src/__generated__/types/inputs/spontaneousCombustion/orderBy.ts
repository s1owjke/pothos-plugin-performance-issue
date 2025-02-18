import { builder } from "src/builder";

import { SortOrder } from "../../../enums/sortOrder";
import { GravityOverrideOrderBy } from "../gravityOverride/orderBy";
import { MissingContextOrderBy } from "../missingContext/orderBy";
import { SentientMetadatumOrderBy } from "../sentientMetadatum/orderBy";

export const SpontaneousCombustionOrderBy = builder.inputRef<any>("SpontaneousCombustionOrderBy").implement({
  fields: (t) => ({
    id: t.field({ type: SortOrder, required: false }),
    createdAt: t.field({ type: SortOrder, required: false }),
    updatedAt: t.field({ type: SortOrder, required: false }),
    gravityOverride: t.field({ type: GravityOverrideOrderBy, required: false }),
    gravityOverrideId: t.field({ type: SortOrder, required: false }),
    missingContext: t.field({ type: MissingContextOrderBy, required: false }),
    missingContextId: t.field({ type: SortOrder, required: false }),
    sentientMetadata: t.field({ type: SentientMetadatumOrderBy, required: false }),
    sentientMetadataId: t.field({ type: SortOrder, required: false }),
    symphonyChartId: t.field({ type: SortOrder, required: false }),
  }),
});
