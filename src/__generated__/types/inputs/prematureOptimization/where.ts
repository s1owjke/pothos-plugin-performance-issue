import { builder } from "src/builder";

import { DateTimeFilter } from "../dateTimeFilter";
import { IdFilter } from "../idFilter";
import { OverwrittenLegacyWhereRelationList } from "../overwrittenLegacy/whereRelationList";

export const PrematureOptimizationWhere = builder.inputRef<any>("PrematureOptimizationWhere").implement({
  fields: (t) => ({
    id: t.field({ type: IdFilter, required: false }),
    createdAt: t.field({ type: DateTimeFilter, required: false }),
    updatedAt: t.field({ type: DateTimeFilter, required: false }),
    overwrittenLegacies: t.field({ type: OverwrittenLegacyWhereRelationList, required: false }),
    AND: t.field({ type: [PrematureOptimizationWhere], required: false }),
    OR: t.field({ type: [PrematureOptimizationWhere], required: false }),
    NOT: t.field({ type: [PrematureOptimizationWhere], required: false }),
  }),
});
