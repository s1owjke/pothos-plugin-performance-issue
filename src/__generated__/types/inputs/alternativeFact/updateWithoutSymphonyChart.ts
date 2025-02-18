import { builder } from "src/builder";

import { GlitchRegistryUpdateRelationWithoutAlternativeFacts } from "../glitchRegistry/updateRelationWithoutAlternativeFacts";
import { GloriousMistakeUpdateRelationListWithoutAlternativeFact } from "../gloriousMistake/updateRelationListWithoutAlternativeFact";
import { SingularityReportUpdateRelationWithoutAlternativeFact } from "../singularityReport/updateRelationWithoutAlternativeFact";

export const AlternativeFactUpdateWithoutSymphonyChart = builder.inputRef<any>("AlternativeFactUpdateWithoutSymphonyChart").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    glitchRegistry: t.field({
      type: GlitchRegistryUpdateRelationWithoutAlternativeFacts,
      required: false,
    }),
    gloriousMistakes: t.field({
      type: GloriousMistakeUpdateRelationListWithoutAlternativeFact,
      required: false,
    }),
    singularityReport: t.field({
      type: SingularityReportUpdateRelationWithoutAlternativeFact,
      required: false,
    }),
  }),
});
