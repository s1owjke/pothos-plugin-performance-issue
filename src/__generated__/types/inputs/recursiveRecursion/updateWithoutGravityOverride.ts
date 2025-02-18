import { builder } from "src/builder";

import { HyperlinkedUnicornUpdateRelationListWithoutRecursiveRecursions } from "../hyperlinkedUnicorn/updateRelationListWithoutRecursiveRecursions";
import { SecretSauceUpdateRelationListWithoutRecursiveRecursions } from "../secretSauce/updateRelationListWithoutRecursiveRecursions";

export const RecursiveRecursionUpdateWithoutGravityOverride = builder.inputRef<any>("RecursiveRecursionUpdateWithoutGravityOverride").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
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
