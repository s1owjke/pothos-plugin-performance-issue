import { builder } from "src/builder";

import { GlitchRegistryCreateRelationListWithoutOverwrittenLegacy } from "../glitchRegistry/createRelationListWithoutOverwrittenLegacy";
import { PrematureOptimizationCreateRelationWithoutOverwrittenLegacies } from "../prematureOptimization/createRelationWithoutOverwrittenLegacies";

export const OverwrittenLegacyCreateWithoutArtificialPotato = builder.inputRef<any>("OverwrittenLegacyCreateWithoutArtificialPotato").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    glitchRegistries: t.field({
      type: GlitchRegistryCreateRelationListWithoutOverwrittenLegacy,
      required: false,
    }),
    prematureOptimization: t.field({
      type: PrematureOptimizationCreateRelationWithoutOverwrittenLegacies,
      required: true,
    }),
  }),
});
