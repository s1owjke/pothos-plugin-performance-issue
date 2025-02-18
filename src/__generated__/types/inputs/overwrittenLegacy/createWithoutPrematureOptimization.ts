import { builder } from "src/builder";

import { ArtificialPotatoCreateRelationWithoutOverwrittenLegacy } from "../artificialPotato/createRelationWithoutOverwrittenLegacy";
import { GlitchRegistryCreateRelationListWithoutOverwrittenLegacy } from "../glitchRegistry/createRelationListWithoutOverwrittenLegacy";

export const OverwrittenLegacyCreateWithoutPrematureOptimization = builder
  .inputRef<any>("OverwrittenLegacyCreateWithoutPrematureOptimization")
  .implement({
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
    }),
  });
