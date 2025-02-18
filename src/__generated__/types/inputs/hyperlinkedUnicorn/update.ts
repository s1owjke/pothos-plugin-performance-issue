import { builder } from "src/builder";

import { GravityOverrideUpdateRelationWithoutHyperlinkedUnicorns } from "../gravityOverride/updateRelationWithoutHyperlinkedUnicorns";
import { RecursiveRecursionUpdateRelationListWithoutHyperlinkedUnicorns } from "../recursiveRecursion/updateRelationListWithoutHyperlinkedUnicorns";

export const HyperlinkedUnicornUpdate = builder.inputRef<any>("HyperlinkedUnicornUpdate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    gravityOverride: t.field({
      type: GravityOverrideUpdateRelationWithoutHyperlinkedUnicorns,
      required: false,
    }),
    recursiveRecursions: t.field({
      type: RecursiveRecursionUpdateRelationListWithoutHyperlinkedUnicorns,
      required: false,
    }),
  }),
});
