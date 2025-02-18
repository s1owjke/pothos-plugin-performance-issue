import { builder } from "src/builder";

import { GravityOverrideCreateRelationWithoutRecursiveRecursions } from "../gravityOverride/createRelationWithoutRecursiveRecursions";
import { HyperlinkedUnicornCreateRelationListWithoutRecursiveRecursions } from "../hyperlinkedUnicorn/createRelationListWithoutRecursiveRecursions";
import { SecretSauceCreateRelationListWithoutRecursiveRecursions } from "../secretSauce/createRelationListWithoutRecursiveRecursions";

export const RecursiveRecursionCreate = builder.inputRef<any>("RecursiveRecursionCreate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    gravityOverride: t.field({
      type: GravityOverrideCreateRelationWithoutRecursiveRecursions,
      required: true,
    }),
    hyperlinkedUnicorns: t.field({
      type: HyperlinkedUnicornCreateRelationListWithoutRecursiveRecursions,
      required: false,
    }),
    secretSauces: t.field({
      type: SecretSauceCreateRelationListWithoutRecursiveRecursions,
      required: false,
    }),
  }),
});
