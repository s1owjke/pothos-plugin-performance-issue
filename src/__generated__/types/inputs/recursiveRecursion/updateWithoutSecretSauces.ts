import { builder } from "src/builder";

import { GravityOverrideUpdateRelationWithoutRecursiveRecursions } from "../gravityOverride/updateRelationWithoutRecursiveRecursions";
import { HyperlinkedUnicornUpdateRelationListWithoutRecursiveRecursions } from "../hyperlinkedUnicorn/updateRelationListWithoutRecursiveRecursions";

export const RecursiveRecursionUpdateWithoutSecretSauces = builder.inputRef<any>("RecursiveRecursionUpdateWithoutSecretSauces").implement({
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
  }),
});
