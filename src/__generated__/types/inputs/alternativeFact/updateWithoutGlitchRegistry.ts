import { builder } from "src/builder";

import { GloriousMistakeUpdateRelationListWithoutAlternativeFact } from "../gloriousMistake/updateRelationListWithoutAlternativeFact";
import { SingularityReportUpdateRelationWithoutAlternativeFact } from "../singularityReport/updateRelationWithoutAlternativeFact";
import { SymphonyChartUpdateRelationWithoutAlternativeFacts } from "../symphonyChart/updateRelationWithoutAlternativeFacts";

export const AlternativeFactUpdateWithoutGlitchRegistry = builder.inputRef<any>("AlternativeFactUpdateWithoutGlitchRegistry").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
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
