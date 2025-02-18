import { builder } from "src/builder";

import { GravityOverrideCreateRelationWithoutRecursiveRecursions } from "../gravityOverride/createRelationWithoutRecursiveRecursions";
import { SecretSauceCreateRelationListWithoutRecursiveRecursions } from "../secretSauce/createRelationListWithoutRecursiveRecursions";

export const RecursiveRecursionCreateWithoutHyperlinkedUnicorns = builder
  .inputRef<any>("RecursiveRecursionCreateWithoutHyperlinkedUnicorns")
  .implement({
    fields: (t) => ({
      createdAt: t.field({ type: "DateTime", required: true }),
      updatedAt: t.field({ type: "DateTime", required: true }),
      gravityOverride: t.field({
        type: GravityOverrideCreateRelationWithoutRecursiveRecursions,
        required: true,
      }),
      secretSauces: t.field({
        type: SecretSauceCreateRelationListWithoutRecursiveRecursions,
        required: false,
      }),
    }),
  });
