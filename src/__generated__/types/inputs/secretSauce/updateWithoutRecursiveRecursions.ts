import { builder } from "src/builder";

import { GravityOverrideUpdateRelationWithoutSecretSauces } from "../gravityOverride/updateRelationWithoutSecretSauces";

export const SecretSauceUpdateWithoutRecursiveRecursions = builder.inputRef<any>("SecretSauceUpdateWithoutRecursiveRecursions").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    gravityOverride: t.field({
      type: GravityOverrideUpdateRelationWithoutSecretSauces,
      required: false,
    }),
  }),
});
