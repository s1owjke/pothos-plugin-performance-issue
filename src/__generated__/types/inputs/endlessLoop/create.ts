import { builder } from "src/builder";

import { GravityOverrideCreateRelationWithoutEndlessLoops } from "../gravityOverride/createRelationWithoutEndlessLoops";
import { PocketUniverseCreateRelationListWithoutEndlessLoops } from "../pocketUniverse/createRelationListWithoutEndlessLoops";

export const EndlessLoopCreate = builder.inputRef<any>("EndlessLoopCreate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    gravityOverride: t.field({
      type: GravityOverrideCreateRelationWithoutEndlessLoops,
      required: true,
    }),
    pocketUniverses: t.field({
      type: PocketUniverseCreateRelationListWithoutEndlessLoops,
      required: false,
    }),
  }),
});
