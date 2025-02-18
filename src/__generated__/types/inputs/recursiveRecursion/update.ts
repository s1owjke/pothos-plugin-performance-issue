import { builder } from "src/builder";

import { GravityOverrideUpdateRelationWithoutRecursiveRecursions } from "../gravityOverride/updateRelationWithoutRecursiveRecursions";
import { HyperlinkedUnicornUpdateRelationListWithoutRecursiveRecursions } from "../hyperlinkedUnicorn/updateRelationListWithoutRecursiveRecursions";
import { SecretSauceUpdateRelationListWithoutRecursiveRecursions } from "../secretSauce/updateRelationListWithoutRecursiveRecursions";

export const RecursiveRecursionUpdate = builder.inputRef<any>("RecursiveRecursionUpdate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    gravityOverride: t.field({
      type: GravityOverrideUpdateRelationWithoutRecursiveRecursions,
      required: false,
    }),
    hyperlinkedUnicorns: t.field({
      type: HyperlinkedUnicornUpdateRelationListWithoutRecursiveRecursions,
      required: false,
    }),
    secretSauces: t.field({
      type: SecretSauceUpdateRelationListWithoutRecursiveRecursions,
      required: false,
    }),
  }),
});
