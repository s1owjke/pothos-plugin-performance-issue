import { builder } from "src/builder";

import { ArtificialPotatoCreateRelationWithoutEchoChambers } from "../artificialPotato/createRelationWithoutEchoChambers";
import { GlitchRegistryCreateRelationListWithoutEchoChamber } from "../glitchRegistry/createRelationListWithoutEchoChamber";
import { SchrodingerUserCreateRelationWithoutEchoChamber } from "../schrodingerUser/createRelationWithoutEchoChamber";

export const EchoChamberCreate = builder.inputRef<any>("EchoChamberCreate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    glitchRegistries: t.field({
      type: GlitchRegistryCreateRelationListWithoutEchoChamber,
      required: false,
    }),
    schrodingerUser: t.field({
      type: SchrodingerUserCreateRelationWithoutEchoChamber,
      required: true,
    }),
    verifier: t.field({ type: ArtificialPotatoCreateRelationWithoutEchoChambers, required: true }),
  }),
});
