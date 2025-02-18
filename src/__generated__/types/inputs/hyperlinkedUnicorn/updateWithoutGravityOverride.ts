import { builder } from "src/builder";

import { RecursiveRecursionUpdateRelationListWithoutHyperlinkedUnicorns } from "../recursiveRecursion/updateRelationListWithoutHyperlinkedUnicorns";

export const HyperlinkedUnicornUpdateWithoutGravityOverride = builder.inputRef<any>("HyperlinkedUnicornUpdateWithoutGravityOverride").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    recursiveRecursions: t.field({
      type: RecursiveRecursionUpdateRelationListWithoutHyperlinkedUnicorns,
      required: false,
    }),
  }),
});
