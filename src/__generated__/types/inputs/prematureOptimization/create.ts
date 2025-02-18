import { builder } from "src/builder";

import { OverwrittenLegacyCreateRelationListWithoutPrematureOptimization } from "../overwrittenLegacy/createRelationListWithoutPrematureOptimization";

export const PrematureOptimizationCreate = builder.inputRef<any>("PrematureOptimizationCreate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    overwrittenLegacies: t.field({
      type: OverwrittenLegacyCreateRelationListWithoutPrematureOptimization,
      required: false,
    }),
  }),
});
