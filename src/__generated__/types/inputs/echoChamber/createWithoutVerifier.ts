import { builder } from "src/builder";

import { GlitchRegistryCreateRelationListWithoutEchoChamber } from "../glitchRegistry/createRelationListWithoutEchoChamber";
import { SchrodingerUserCreateRelationWithoutEchoChamber } from "../schrodingerUser/createRelationWithoutEchoChamber";

export const EchoChamberCreateWithoutVerifier = builder.inputRef<any>("EchoChamberCreateWithoutVerifier").implement({
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
  }),
});
