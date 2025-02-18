import { builder } from "src/builder";

import { RecursiveRecursionCreateRelationListWithoutHyperlinkedUnicorns } from "../recursiveRecursion/createRelationListWithoutHyperlinkedUnicorns";

export const HyperlinkedUnicornCreateWithoutGravityOverride = builder.inputRef<any>("HyperlinkedUnicornCreateWithoutGravityOverride").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    recursiveRecursions: t.field({
      type: RecursiveRecursionCreateRelationListWithoutHyperlinkedUnicorns,
      required: false,
    }),
  }),
});
