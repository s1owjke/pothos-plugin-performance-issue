import { builder } from "src/builder";

import { GravityOverrideUpdateRelationWithoutOverdueRevolutions } from "../gravityOverride/updateRelationWithoutOverdueRevolutions";
import { PocketUniverseUpdateRelationListWithoutOverdueRevolutions } from "../pocketUniverse/updateRelationListWithoutOverdueRevolutions";

export const OverdueRevolutionUpdate = builder.inputRef<any>("OverdueRevolutionUpdate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    gravityOverride: t.field({
      type: GravityOverrideUpdateRelationWithoutOverdueRevolutions,
      required: false,
    }),
    pocketUniverses: t.field({
      type: PocketUniverseUpdateRelationListWithoutOverdueRevolutions,
      required: false,
    }),
  }),
});
