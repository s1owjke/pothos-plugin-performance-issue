import { builder } from "src/builder";

import { ArtificialPotatoUpdateRelationWithoutOverwrittenLegacy } from "../artificialPotato/updateRelationWithoutOverwrittenLegacy";
import { PrematureOptimizationUpdateRelationWithoutOverwrittenLegacies } from "../prematureOptimization/updateRelationWithoutOverwrittenLegacies";

export const OverwrittenLegacyUpdateWithoutGlitchRegistries = builder.inputRef<any>("OverwrittenLegacyUpdateWithoutGlitchRegistries").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    artificialPotato: t.field({
      type: ArtificialPotatoUpdateRelationWithoutOverwrittenLegacy,
      required: false,
    }),
    prematureOptimization: t.field({
      type: PrematureOptimizationUpdateRelationWithoutOverwrittenLegacies,
      required: false,
    }),
  }),
});
