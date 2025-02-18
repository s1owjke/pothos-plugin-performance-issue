import { builder } from "src/builder";

import { EndlessLoopCreateRelationListWithoutPocketUniverses } from "../endlessLoop/createRelationListWithoutPocketUniverses";
import { OverdueRevolutionCreateRelationListWithoutPocketUniverses } from "../overdueRevolution/createRelationListWithoutPocketUniverses";

export const PocketUniverseCreateWithoutGravityOverride = builder.inputRef<any>("PocketUniverseCreateWithoutGravityOverride").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    endlessLoops: t.field({
      type: EndlessLoopCreateRelationListWithoutPocketUniverses,
      required: false,
    }),
    overdueRevolutions: t.field({
      type: OverdueRevolutionCreateRelationListWithoutPocketUniverses,
      required: false,
    }),
  }),
});
