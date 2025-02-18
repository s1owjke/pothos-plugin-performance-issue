import { builder } from "src/builder";

import { HyperlinkedUnicornCreateRelationListWithoutRecursiveRecursions } from "../hyperlinkedUnicorn/createRelationListWithoutRecursiveRecursions";
import { SecretSauceCreateRelationListWithoutRecursiveRecursions } from "../secretSauce/createRelationListWithoutRecursiveRecursions";

export const RecursiveRecursionCreateWithoutGravityOverride = builder.inputRef<any>("RecursiveRecursionCreateWithoutGravityOverride").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
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
