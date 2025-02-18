import { builder } from "src/builder";

import { GravityOverrideUpdateRelationWithoutEndlessLoops } from "../gravityOverride/updateRelationWithoutEndlessLoops";
import { PocketUniverseUpdateRelationListWithoutEndlessLoops } from "../pocketUniverse/updateRelationListWithoutEndlessLoops";

export const EndlessLoopUpdate = builder.inputRef<any>("EndlessLoopUpdate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    gravityOverride: t.field({
      type: GravityOverrideUpdateRelationWithoutEndlessLoops,
      required: false,
    }),
    pocketUniverses: t.field({
      type: PocketUniverseUpdateRelationListWithoutEndlessLoops,
      required: false,
    }),
  }),
});
