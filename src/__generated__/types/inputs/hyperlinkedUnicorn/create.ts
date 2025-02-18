import { builder } from "src/builder";

import { GravityOverrideCreateRelationWithoutHyperlinkedUnicorns } from "../gravityOverride/createRelationWithoutHyperlinkedUnicorns";
import { RecursiveRecursionCreateRelationListWithoutHyperlinkedUnicorns } from "../recursiveRecursion/createRelationListWithoutHyperlinkedUnicorns";

export const HyperlinkedUnicornCreate = builder.inputRef<any>("HyperlinkedUnicornCreate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    gravityOverride: t.field({
      type: GravityOverrideCreateRelationWithoutHyperlinkedUnicorns,
      required: true,
    }),
    recursiveRecursions: t.field({
      type: RecursiveRecursionCreateRelationListWithoutHyperlinkedUnicorns,
      required: false,
    }),
  }),
});
