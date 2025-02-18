import { builder } from "src/builder";

import { ArtificialPotatoCreateRelationWithoutOverwrittenLegacy } from "../artificialPotato/createRelationWithoutOverwrittenLegacy";
import { PrematureOptimizationCreateRelationWithoutOverwrittenLegacies } from "../prematureOptimization/createRelationWithoutOverwrittenLegacies";

export const OverwrittenLegacyCreateWithoutGlitchRegistries = builder.inputRef<any>("OverwrittenLegacyCreateWithoutGlitchRegistries").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    artificialPotato: t.field({
      type: ArtificialPotatoCreateRelationWithoutOverwrittenLegacy,
      required: true,
    }),
    prematureOptimization: t.field({
      type: PrematureOptimizationCreateRelationWithoutOverwrittenLegacies,
      required: true,
    }),
  }),
});
