import { builder } from "src/builder";

import { EndlessLoopUpdateRelationListWithoutPocketUniverses } from "../endlessLoop/updateRelationListWithoutPocketUniverses";
import { GravityOverrideUpdateRelationWithoutPocketUniverses } from "../gravityOverride/updateRelationWithoutPocketUniverses";
import { OverdueRevolutionUpdateRelationListWithoutPocketUniverses } from "../overdueRevolution/updateRelationListWithoutPocketUniverses";

export const PocketUniverseUpdate = builder.inputRef<any>("PocketUniverseUpdate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    endlessLoops: t.field({
      type: EndlessLoopUpdateRelationListWithoutPocketUniverses,
      required: false,
    }),
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
