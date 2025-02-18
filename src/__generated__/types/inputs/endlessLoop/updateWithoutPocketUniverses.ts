import { builder } from "src/builder";

import { GravityOverrideUpdateRelationWithoutEndlessLoops } from "../gravityOverride/updateRelationWithoutEndlessLoops";

export const EndlessLoopUpdateWithoutPocketUniverses = builder.inputRef<any>("EndlessLoopUpdateWithoutPocketUniverses").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    gravityOverride: t.field({
      type: GravityOverrideUpdateRelationWithoutEndlessLoops,
      required: false,
    }),
  }),
});
