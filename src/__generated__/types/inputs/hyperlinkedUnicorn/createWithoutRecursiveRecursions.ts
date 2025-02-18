import { builder } from "src/builder";

import { GravityOverrideCreateRelationWithoutHyperlinkedUnicorns } from "../gravityOverride/createRelationWithoutHyperlinkedUnicorns";

export const HyperlinkedUnicornCreateWithoutRecursiveRecursions = builder
  .inputRef<any>("HyperlinkedUnicornCreateWithoutRecursiveRecursions")
  .implement({
    fields: (t) => ({
      createdAt: t.field({ type: "DateTime", required: true }),
      updatedAt: t.field({ type: "DateTime", required: true }),
      gravityOverride: t.field({
        type: GravityOverrideCreateRelationWithoutHyperlinkedUnicorns,
        required: true,
      }),
    }),
  });
