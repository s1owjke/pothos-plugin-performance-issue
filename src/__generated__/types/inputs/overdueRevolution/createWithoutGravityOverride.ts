import { builder } from "src/builder";

import { PocketUniverseCreateRelationListWithoutOverdueRevolutions } from "../pocketUniverse/createRelationListWithoutOverdueRevolutions";

export const OverdueRevolutionCreateWithoutGravityOverride = builder.inputRef<any>("OverdueRevolutionCreateWithoutGravityOverride").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    pocketUniverses: t.field({
      type: PocketUniverseCreateRelationListWithoutOverdueRevolutions,
      required: false,
    }),
  }),
});
