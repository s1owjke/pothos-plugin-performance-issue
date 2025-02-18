import { builder } from "src/builder";

import { GravityOverrideCreateRelationWithoutSecretSauces } from "../gravityOverride/createRelationWithoutSecretSauces";

export const SecretSauceCreateWithoutRecursiveRecursions = builder.inputRef<any>("SecretSauceCreateWithoutRecursiveRecursions").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    gravityOverride: t.field({
      type: GravityOverrideCreateRelationWithoutSecretSauces,
      required: true,
    }),
  }),
});
