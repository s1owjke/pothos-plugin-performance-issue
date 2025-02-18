import { builder } from "src/builder";

import { GravityOverrideUpdateRelationWithoutPocketUniverses } from "../gravityOverride/updateRelationWithoutPocketUniverses";
import { OverdueRevolutionUpdateRelationListWithoutPocketUniverses } from "../overdueRevolution/updateRelationListWithoutPocketUniverses";

export const PocketUniverseUpdateWithoutEndlessLoops = builder.inputRef<any>("PocketUniverseUpdateWithoutEndlessLoops").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    gravityOverride: t.field({
      type: GravityOverrideUpdateRelationWithoutPocketUniverses,
      required: false,
    }),
    overdueRevolutions: t.field({
      type: OverdueRevolutionUpdateRelationListWithoutPocketUniverses,
      required: false,
    }),
  }),
});
