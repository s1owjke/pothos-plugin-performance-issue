import { builder } from "src/builder";

import { SpontaneousCombustionUpdateRelationListWithoutDoomedExperiments } from "../spontaneousCombustion/updateRelationListWithoutDoomedExperiments";

export const DoomedExperimentUpdateWithoutGravityOverride = builder.inputRef<any>("DoomedExperimentUpdateWithoutGravityOverride").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    spontaneousCombustions: t.field({
      type: SpontaneousCombustionUpdateRelationListWithoutDoomedExperiments,
      required: false,
    }),
  }),
});
