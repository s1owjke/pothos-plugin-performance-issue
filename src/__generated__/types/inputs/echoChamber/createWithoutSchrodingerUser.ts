import { builder } from "src/builder";

import { ArtificialPotatoCreateRelationWithoutEchoChambers } from "../artificialPotato/createRelationWithoutEchoChambers";
import { GlitchRegistryCreateRelationListWithoutEchoChamber } from "../glitchRegistry/createRelationListWithoutEchoChamber";

export const EchoChamberCreateWithoutSchrodingerUser = builder.inputRef<any>("EchoChamberCreateWithoutSchrodingerUser").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    glitchRegistries: t.field({
      type: GlitchRegistryCreateRelationListWithoutEchoChamber,
      required: false,
    }),
    verifier: t.field({
      type: ArtificialPotatoCreateRelationWithoutEchoChambers,
      required: true,
    }),
  }),
});
