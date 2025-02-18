import { builder } from "src/builder";

import { GravityOverrideUpdateRelationWithoutHyperlinkedUnicorns } from "../gravityOverride/updateRelationWithoutHyperlinkedUnicorns";

export const HyperlinkedUnicornUpdateWithoutRecursiveRecursions = builder
  .inputRef<any>("HyperlinkedUnicornUpdateWithoutRecursiveRecursions")
  .implement({
    fields: (t) => ({
      createdAt: t.field({ type: "DateTime", required: false }),
      updatedAt: t.field({ type: "DateTime", required: false }),
      gravityOverride: t.field({
        type: GravityOverrideUpdateRelationWithoutHyperlinkedUnicorns,
        required: false,
      }),
    }),
  });
