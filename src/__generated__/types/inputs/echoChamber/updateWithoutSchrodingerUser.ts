import { builder } from "src/builder";

import { ArtificialPotatoUpdateRelationWithoutEchoChambers } from "../artificialPotato/updateRelationWithoutEchoChambers";
import { GlitchRegistryUpdateRelationListWithoutEchoChamber } from "../glitchRegistry/updateRelationListWithoutEchoChamber";

export const EchoChamberUpdateWithoutSchrodingerUser = builder.inputRef<any>("EchoChamberUpdateWithoutSchrodingerUser").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    glitchRegistries: t.field({
      type: GlitchRegistryUpdateRelationListWithoutEchoChamber,
      required: false,
    }),
    verifier: t.field({
      type: ArtificialPotatoUpdateRelationWithoutEchoChambers,
      required: false,
    }),
  }),
});
