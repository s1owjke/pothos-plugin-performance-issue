import { builder } from "src/builder";

import { ArtificialPotatoCreateRelationWithoutEchoChambers } from "../artificialPotato/createRelationWithoutEchoChambers";
import { SchrodingerUserCreateRelationWithoutEchoChamber } from "../schrodingerUser/createRelationWithoutEchoChamber";

export const EchoChamberCreateWithoutGlitchRegistries = builder.inputRef<any>("EchoChamberCreateWithoutGlitchRegistries").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    schrodingerUser: t.field({
      type: SchrodingerUserCreateRelationWithoutEchoChamber,
      required: true,
    }),
    verifier: t.field({
      type: ArtificialPotatoCreateRelationWithoutEchoChambers,
      required: true,
    }),
  }),
});
