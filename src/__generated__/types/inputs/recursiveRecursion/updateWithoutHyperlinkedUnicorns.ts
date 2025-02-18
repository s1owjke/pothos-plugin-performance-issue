import { builder } from "src/builder";

import { GravityOverrideUpdateRelationWithoutRecursiveRecursions } from "../gravityOverride/updateRelationWithoutRecursiveRecursions";
import { SecretSauceUpdateRelationListWithoutRecursiveRecursions } from "../secretSauce/updateRelationListWithoutRecursiveRecursions";

export const RecursiveRecursionUpdateWithoutHyperlinkedUnicorns = builder
  .inputRef<any>("RecursiveRecursionUpdateWithoutHyperlinkedUnicorns")
  .implement({
    fields: (t) => ({
      createdAt: t.field({ type: "DateTime", required: false }),
      updatedAt: t.field({ type: "DateTime", required: false }),
      gravityOverride: t.field({
        type: GravityOverrideUpdateRelationWithoutRecursiveRecursions,
        required: false,
      }),
      secretSauces: t.field({
        type: SecretSauceUpdateRelationListWithoutRecursiveRecursions,
        required: false,
      }),
    }),
  });
