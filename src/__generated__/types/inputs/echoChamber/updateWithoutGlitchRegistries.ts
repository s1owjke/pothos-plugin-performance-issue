import { builder } from "src/builder";

import { ArtificialPotatoUpdateRelationWithoutEchoChambers } from "../artificialPotato/updateRelationWithoutEchoChambers";
import { SchrodingerUserUpdateRelationWithoutEchoChamber } from "../schrodingerUser/updateRelationWithoutEchoChamber";

export const EchoChamberUpdateWithoutGlitchRegistries = builder.inputRef<any>("EchoChamberUpdateWithoutGlitchRegistries").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    schrodingerUser: t.field({
      type: SchrodingerUserUpdateRelationWithoutEchoChamber,
      required: false,
    }),
    verifier: t.field({
      type: ArtificialPotatoUpdateRelationWithoutEchoChambers,
      required: false,
    }),
  }),
});
