import { builder } from "src/builder";

import { ArtificialPotatoUpdateRelationWithoutOverwrittenLegacy } from "../artificialPotato/updateRelationWithoutOverwrittenLegacy";
import { GlitchRegistryUpdateRelationListWithoutOverwrittenLegacy } from "../glitchRegistry/updateRelationListWithoutOverwrittenLegacy";
import { PrematureOptimizationUpdateRelationWithoutOverwrittenLegacies } from "../prematureOptimization/updateRelationWithoutOverwrittenLegacies";

export const OverwrittenLegacyUpdate = builder.inputRef<any>("OverwrittenLegacyUpdate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    artificialPotato: t.field({
      type: ArtificialPotatoUpdateRelationWithoutOverwrittenLegacy,
      required: false,
    }),
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
