import { builder } from "src/builder";

import { PocketUniverseUpdateRelationListWithoutOverdueRevolutions } from "../pocketUniverse/updateRelationListWithoutOverdueRevolutions";

export const OverdueRevolutionUpdateWithoutGravityOverride = builder.inputRef<any>("OverdueRevolutionUpdateWithoutGravityOverride").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    pocketUniverses: t.field({
      type: PocketUniverseUpdateRelationListWithoutOverdueRevolutions,
      required: false,
    }),
  }),
});
