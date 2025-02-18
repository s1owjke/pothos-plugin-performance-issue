import { builder } from "src/builder";

import { EndlessLoopUpdateRelationListWithoutPocketUniverses } from "../endlessLoop/updateRelationListWithoutPocketUniverses";
import { OverdueRevolutionUpdateRelationListWithoutPocketUniverses } from "../overdueRevolution/updateRelationListWithoutPocketUniverses";

export const PocketUniverseUpdateWithoutGravityOverride = builder.inputRef<any>("PocketUniverseUpdateWithoutGravityOverride").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    endlessLoops: t.field({
      type: EndlessLoopUpdateRelationListWithoutPocketUniverses,
      required: false,
    }),
    overdueRevolutions: t.field({
      type: OverdueRevolutionUpdateRelationListWithoutPocketUniverses,
      required: false,
    }),
  }),
});
