import { builder } from "src/builder";

import { GlitchRegistryUpdateRelationWithoutAlternativeFacts } from "../glitchRegistry/updateRelationWithoutAlternativeFacts";
import { GloriousMistakeUpdateRelationListWithoutAlternativeFact } from "../gloriousMistake/updateRelationListWithoutAlternativeFact";
import { SingularityReportUpdateRelationWithoutAlternativeFact } from "../singularityReport/updateRelationWithoutAlternativeFact";
import { SymphonyChartUpdateRelationWithoutAlternativeFacts } from "../symphonyChart/updateRelationWithoutAlternativeFacts";

export const AlternativeFactUpdate = builder.inputRef<any>("AlternativeFactUpdate").implement({
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
    symphonyChart: t.field({
      type: SymphonyChartUpdateRelationWithoutAlternativeFacts,
      required: false,
    }),
  }),
});
