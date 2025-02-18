import { builder } from "src/builder";

import { RecursiveRecursionUpdateRelationListWithoutSecretSauces } from "../recursiveRecursion/updateRelationListWithoutSecretSauces";

export const SecretSauceUpdateWithoutGravityOverride = builder.inputRef<any>("SecretSauceUpdateWithoutGravityOverride").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    recursiveRecursions: t.field({
      type: RecursiveRecursionUpdateRelationListWithoutSecretSauces,
      required: false,
    }),
  }),
});
