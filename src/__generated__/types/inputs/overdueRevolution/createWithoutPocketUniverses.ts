import { builder } from "src/builder";

import { GravityOverrideCreateRelationWithoutOverdueRevolutions } from "../gravityOverride/createRelationWithoutOverdueRevolutions";

export const OverdueRevolutionCreateWithoutPocketUniverses = builder.inputRef<any>("OverdueRevolutionCreateWithoutPocketUniverses").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    gravityOverride: t.field({
      type: GravityOverrideCreateRelationWithoutOverdueRevolutions,
      required: true,
    }),
  }),
});
