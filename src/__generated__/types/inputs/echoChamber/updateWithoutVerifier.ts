import { builder } from "src/builder";

import { GlitchRegistryUpdateRelationListWithoutEchoChamber } from "../glitchRegistry/updateRelationListWithoutEchoChamber";
import { SchrodingerUserUpdateRelationWithoutEchoChamber } from "../schrodingerUser/updateRelationWithoutEchoChamber";

export const EchoChamberUpdateWithoutVerifier = builder.inputRef<any>("EchoChamberUpdateWithoutVerifier").implement({
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
  }),
});
