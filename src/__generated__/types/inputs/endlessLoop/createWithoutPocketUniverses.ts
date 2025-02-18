import { builder } from "src/builder";

import { GravityOverrideCreateRelationWithoutEndlessLoops } from "../gravityOverride/createRelationWithoutEndlessLoops";

export const EndlessLoopCreateWithoutPocketUniverses = builder.inputRef<any>("EndlessLoopCreateWithoutPocketUniverses").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    gravityOverride: t.field({
      type: GravityOverrideCreateRelationWithoutEndlessLoops,
      required: true,
    }),
  }),
});
