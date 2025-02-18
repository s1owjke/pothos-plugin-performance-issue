import { builder } from "src/builder";

import { GlitchRegistryUpdateRelationListWithoutOverwrittenLegacy } from "../glitchRegistry/updateRelationListWithoutOverwrittenLegacy";
import { PrematureOptimizationUpdateRelationWithoutOverwrittenLegacies } from "../prematureOptimization/updateRelationWithoutOverwrittenLegacies";

export const OverwrittenLegacyUpdateWithoutArtificialPotato = builder.inputRef<any>("OverwrittenLegacyUpdateWithoutArtificialPotato").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    glitchRegistries: t.field({
      type: GlitchRegistryUpdateRelationListWithoutOverwrittenLegacy,
      required: false,
    }),
    prematureOptimization: t.field({
      type: PrematureOptimizationUpdateRelationWithoutOverwrittenLegacies,
      required: false,
    }),
  }),
});
