import { builder } from "src/builder";

import { ArtificialPotatoUpdateRelationWithoutOverwrittenLegacy } from "../artificialPotato/updateRelationWithoutOverwrittenLegacy";
import { GlitchRegistryUpdateRelationListWithoutOverwrittenLegacy } from "../glitchRegistry/updateRelationListWithoutOverwrittenLegacy";

export const OverwrittenLegacyUpdateWithoutPrematureOptimization = builder
  .inputRef<any>("OverwrittenLegacyUpdateWithoutPrematureOptimization")
  .implement({
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
    }),
  });
