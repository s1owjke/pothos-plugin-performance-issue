import { builder } from "src/builder";

import { GravityOverrideCreateRelationWithoutPocketUniverses } from "../gravityOverride/createRelationWithoutPocketUniverses";
import { OverdueRevolutionCreateRelationListWithoutPocketUniverses } from "../overdueRevolution/createRelationListWithoutPocketUniverses";

export const PocketUniverseCreateWithoutEndlessLoops = builder.inputRef<any>("PocketUniverseCreateWithoutEndlessLoops").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    gravityOverride: t.field({
      type: GravityOverrideCreateRelationWithoutPocketUniverses,
      required: true,
    }),
    overdueRevolutions: t.field({
      type: OverdueRevolutionCreateRelationListWithoutPocketUniverses,
      required: false,
    }),
  }),
});
