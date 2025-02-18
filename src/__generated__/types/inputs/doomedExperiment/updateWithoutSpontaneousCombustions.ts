import { builder } from "src/builder";

import { GravityOverrideUpdateRelationWithoutDoomedExperiments } from "../gravityOverride/updateRelationWithoutDoomedExperiments";

export const DoomedExperimentUpdateWithoutSpontaneousCombustions = builder
  .inputRef<any>("DoomedExperimentUpdateWithoutSpontaneousCombustions")
  .implement({
    fields: (t) => ({
      createdAt: t.field({ type: "DateTime", required: false }),
      updatedAt: t.field({ type: "DateTime", required: false }),
      gravityOverride: t.field({
        type: GravityOverrideUpdateRelationWithoutDoomedExperiments,
        required: false,
      }),
    }),
  });
