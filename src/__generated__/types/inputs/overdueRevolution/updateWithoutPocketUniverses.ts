import { builder } from "src/builder";

import { GravityOverrideUpdateRelationWithoutOverdueRevolutions } from "../gravityOverride/updateRelationWithoutOverdueRevolutions";

export const OverdueRevolutionUpdateWithoutPocketUniverses = builder.inputRef<any>("OverdueRevolutionUpdateWithoutPocketUniverses").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    gravityOverride: t.field({
      type: GravityOverrideUpdateRelationWithoutOverdueRevolutions,
      required: false,
    }),
  }),
});
