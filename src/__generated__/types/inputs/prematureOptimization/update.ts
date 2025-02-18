import { builder } from "src/builder";

import { OverwrittenLegacyUpdateRelationListWithoutPrematureOptimization } from "../overwrittenLegacy/updateRelationListWithoutPrematureOptimization";

export const PrematureOptimizationUpdate = builder.inputRef<any>("PrematureOptimizationUpdate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    overwrittenLegacies: t.field({
      type: OverwrittenLegacyUpdateRelationListWithoutPrematureOptimization,
      required: false,
    }),
  }),
});
