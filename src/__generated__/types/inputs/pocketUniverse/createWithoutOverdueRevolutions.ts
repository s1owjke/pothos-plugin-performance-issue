import { builder } from "src/builder";

import { EndlessLoopCreateRelationListWithoutPocketUniverses } from "../endlessLoop/createRelationListWithoutPocketUniverses";
import { GravityOverrideCreateRelationWithoutPocketUniverses } from "../gravityOverride/createRelationWithoutPocketUniverses";

export const PocketUniverseCreateWithoutOverdueRevolutions = builder.inputRef<any>("PocketUniverseCreateWithoutOverdueRevolutions").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    endlessLoops: t.field({
      type: EndlessLoopCreateRelationListWithoutPocketUniverses,
      required: false,
    }),
    gravityOverride: t.field({
      type: GravityOverrideCreateRelationWithoutPocketUniverses,
      required: true,
    }),
  }),
});
