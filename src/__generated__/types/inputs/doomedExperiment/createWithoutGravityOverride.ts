import { builder } from "src/builder";

import { SpontaneousCombustionCreateRelationListWithoutDoomedExperiments } from "../spontaneousCombustion/createRelationListWithoutDoomedExperiments";

export const DoomedExperimentCreateWithoutGravityOverride = builder.inputRef<any>("DoomedExperimentCreateWithoutGravityOverride").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    spontaneousCombustions: t.field({
      type: SpontaneousCombustionCreateRelationListWithoutDoomedExperiments,
      required: false,
    }),
  }),
});
