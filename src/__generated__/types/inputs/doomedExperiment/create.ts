import { builder } from "src/builder";

import { GravityOverrideCreateRelationWithoutDoomedExperiments } from "../gravityOverride/createRelationWithoutDoomedExperiments";
import { SpontaneousCombustionCreateRelationListWithoutDoomedExperiments } from "../spontaneousCombustion/createRelationListWithoutDoomedExperiments";

export const DoomedExperimentCreate = builder.inputRef<any>("DoomedExperimentCreate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    gravityOverride: t.field({
      type: GravityOverrideCreateRelationWithoutDoomedExperiments,
      required: true,
    }),
    spontaneousCombustions: t.field({
      type: SpontaneousCombustionCreateRelationListWithoutDoomedExperiments,
      required: false,
    }),
  }),
});
