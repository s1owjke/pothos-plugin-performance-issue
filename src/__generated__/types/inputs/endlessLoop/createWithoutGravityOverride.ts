import { builder } from "src/builder";

import { PocketUniverseCreateRelationListWithoutEndlessLoops } from "../pocketUniverse/createRelationListWithoutEndlessLoops";

export const EndlessLoopCreateWithoutGravityOverride = builder.inputRef<any>("EndlessLoopCreateWithoutGravityOverride").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    pocketUniverses: t.field({
      type: PocketUniverseCreateRelationListWithoutEndlessLoops,
      required: false,
    }),
  }),
});
