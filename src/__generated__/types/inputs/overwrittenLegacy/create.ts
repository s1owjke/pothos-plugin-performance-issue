import { builder } from "src/builder";

import { ArtificialPotatoCreateRelationWithoutOverwrittenLegacy } from "../artificialPotato/createRelationWithoutOverwrittenLegacy";
import { GlitchRegistryCreateRelationListWithoutOverwrittenLegacy } from "../glitchRegistry/createRelationListWithoutOverwrittenLegacy";
import { PrematureOptimizationCreateRelationWithoutOverwrittenLegacies } from "../prematureOptimization/createRelationWithoutOverwrittenLegacies";

export const OverwrittenLegacyCreate = builder.inputRef<any>("OverwrittenLegacyCreate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    artificialPotato: t.field({
      type: ArtificialPotatoCreateRelationWithoutOverwrittenLegacy,
      required: true,
    }),
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
