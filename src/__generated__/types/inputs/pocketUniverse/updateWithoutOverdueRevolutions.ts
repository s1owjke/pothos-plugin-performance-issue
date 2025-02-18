import { builder } from "src/builder";

import { EndlessLoopUpdateRelationListWithoutPocketUniverses } from "../endlessLoop/updateRelationListWithoutPocketUniverses";
import { GravityOverrideUpdateRelationWithoutPocketUniverses } from "../gravityOverride/updateRelationWithoutPocketUniverses";

export const PocketUniverseUpdateWithoutOverdueRevolutions = builder.inputRef<any>("PocketUniverseUpdateWithoutOverdueRevolutions").implement({
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
  }),
});
