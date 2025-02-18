import { builder } from "src/builder";

import { GravityOverrideCreateRelationWithoutRecursiveRecursions } from "../gravityOverride/createRelationWithoutRecursiveRecursions";
import { HyperlinkedUnicornCreateRelationListWithoutRecursiveRecursions } from "../hyperlinkedUnicorn/createRelationListWithoutRecursiveRecursions";

export const RecursiveRecursionCreateWithoutSecretSauces = builder.inputRef<any>("RecursiveRecursionCreateWithoutSecretSauces").implement({
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
  }),
});
