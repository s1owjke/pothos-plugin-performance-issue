import { builder } from "src/builder";

import { GravityOverrideCreateRelationWithoutDoomedExperiments } from "../gravityOverride/createRelationWithoutDoomedExperiments";

export const DoomedExperimentCreateWithoutSpontaneousCombustions = builder
  .inputRef<any>("DoomedExperimentCreateWithoutSpontaneousCombustions")
  .implement({
    fields: (t) => ({
      createdAt: t.field({ type: "DateTime", required: true }),
      updatedAt: t.field({ type: "DateTime", required: true }),
      gravityOverride: t.field({
        type: GravityOverrideCreateRelationWithoutDoomedExperiments,
        required: true,
      }),
    }),
  });
