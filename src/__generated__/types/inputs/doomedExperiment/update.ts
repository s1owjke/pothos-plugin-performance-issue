import { builder } from "src/builder";

import { GravityOverrideUpdateRelationWithoutDoomedExperiments } from "../gravityOverride/updateRelationWithoutDoomedExperiments";
import { SpontaneousCombustionUpdateRelationListWithoutDoomedExperiments } from "../spontaneousCombustion/updateRelationListWithoutDoomedExperiments";

export const DoomedExperimentUpdate = builder.inputRef<any>("DoomedExperimentUpdate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    gravityOverride: t.field({
      type: GravityOverrideUpdateRelationWithoutDoomedExperiments,
      required: false,
    }),
    spontaneousCombustions: t.field({
      type: SpontaneousCombustionUpdateRelationListWithoutDoomedExperiments,
      required: false,
    }),
  }),
});
