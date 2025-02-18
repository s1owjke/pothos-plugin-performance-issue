import { builder } from "src/builder";

import { GravityOverrideCreateRelationWithoutOverdueRevolutions } from "../gravityOverride/createRelationWithoutOverdueRevolutions";
import { PocketUniverseCreateRelationListWithoutOverdueRevolutions } from "../pocketUniverse/createRelationListWithoutOverdueRevolutions";

export const OverdueRevolutionCreate = builder.inputRef<any>("OverdueRevolutionCreate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    gravityOverride: t.field({
      type: GravityOverrideCreateRelationWithoutOverdueRevolutions,
      required: true,
    }),
    pocketUniverses: t.field({
      type: PocketUniverseCreateRelationListWithoutOverdueRevolutions,
      required: false,
    }),
  }),
});
