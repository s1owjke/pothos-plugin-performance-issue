import { builder } from "src/builder";

import { GravityOverrideUpdateRelationWithoutSecretSauces } from "../gravityOverride/updateRelationWithoutSecretSauces";
import { RecursiveRecursionUpdateRelationListWithoutSecretSauces } from "../recursiveRecursion/updateRelationListWithoutSecretSauces";

export const SecretSauceUpdate = builder.inputRef<any>("SecretSauceUpdate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    gravityOverride: t.field({
      type: GravityOverrideUpdateRelationWithoutSecretSauces,
      required: false,
    }),
    recursiveRecursions: t.field({
      type: RecursiveRecursionUpdateRelationListWithoutSecretSauces,
      required: false,
    }),
  }),
});
