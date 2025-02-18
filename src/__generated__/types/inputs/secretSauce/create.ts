import { builder } from "src/builder";

import { GravityOverrideCreateRelationWithoutSecretSauces } from "../gravityOverride/createRelationWithoutSecretSauces";
import { RecursiveRecursionCreateRelationListWithoutSecretSauces } from "../recursiveRecursion/createRelationListWithoutSecretSauces";

export const SecretSauceCreate = builder.inputRef<any>("SecretSauceCreate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    gravityOverride: t.field({
      type: GravityOverrideCreateRelationWithoutSecretSauces,
      required: true,
    }),
    recursiveRecursions: t.field({
      type: RecursiveRecursionCreateRelationListWithoutSecretSauces,
      required: false,
    }),
  }),
});
