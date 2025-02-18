import { builder } from "src/builder";

import { ArtificialPotatoUpdateRelationWithoutEchoChambers } from "../artificialPotato/updateRelationWithoutEchoChambers";
import { GlitchRegistryUpdateRelationListWithoutEchoChamber } from "../glitchRegistry/updateRelationListWithoutEchoChamber";
import { SchrodingerUserUpdateRelationWithoutEchoChamber } from "../schrodingerUser/updateRelationWithoutEchoChamber";

export const EchoChamberUpdate = builder.inputRef<any>("EchoChamberUpdate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    glitchRegistries: t.field({
      type: GlitchRegistryUpdateRelationListWithoutEchoChamber,
      required: false,
    }),
    schrodingerUser: t.field({
      type: SchrodingerUserUpdateRelationWithoutEchoChamber,
      required: false,
    }),
    verifier: t.field({ type: ArtificialPotatoUpdateRelationWithoutEchoChambers, required: false }),
  }),
});
