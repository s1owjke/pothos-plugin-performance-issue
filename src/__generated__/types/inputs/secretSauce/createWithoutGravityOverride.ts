import { builder } from "src/builder";

import { RecursiveRecursionCreateRelationListWithoutSecretSauces } from "../recursiveRecursion/createRelationListWithoutSecretSauces";

export const SecretSauceCreateWithoutGravityOverride = builder.inputRef<any>("SecretSauceCreateWithoutGravityOverride").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    recursiveRecursions: t.field({
      type: RecursiveRecursionCreateRelationListWithoutSecretSauces,
      required: false,
    }),
  }),
});
