import { builder } from "src/builder";

import { EndlessLoopCreateRelationListWithoutPocketUniverses } from "../endlessLoop/createRelationListWithoutPocketUniverses";
import { GravityOverrideCreateRelationWithoutPocketUniverses } from "../gravityOverride/createRelationWithoutPocketUniverses";
import { OverdueRevolutionCreateRelationListWithoutPocketUniverses } from "../overdueRevolution/createRelationListWithoutPocketUniverses";

export const PocketUniverseCreate = builder.inputRef<any>("PocketUniverseCreate").implement({
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
    overdueRevolutions: t.field({
      type: OverdueRevolutionCreateRelationListWithoutPocketUniverses,
      required: false,
    }),
  }),
});
