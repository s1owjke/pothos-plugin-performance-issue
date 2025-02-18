import { builder } from "src/builder";

import { PocketUniverseUpdateRelationListWithoutEndlessLoops } from "../pocketUniverse/updateRelationListWithoutEndlessLoops";

export const EndlessLoopUpdateWithoutGravityOverride = builder.inputRef<any>("EndlessLoopUpdateWithoutGravityOverride").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    pocketUniverses: t.field({
      type: PocketUniverseUpdateRelationListWithoutEndlessLoops,
      required: false,
    }),
  }),
});
