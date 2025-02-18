import { builder } from "src/builder";

import { GloriousMistakeCreateRelationListWithoutAlternativeFact } from "../gloriousMistake/createRelationListWithoutAlternativeFact";
import { SingularityReportCreateRelationWithoutAlternativeFact } from "../singularityReport/createRelationWithoutAlternativeFact";
import { SymphonyChartCreateRelationWithoutAlternativeFacts } from "../symphonyChart/createRelationWithoutAlternativeFacts";

export const AlternativeFactCreateWithoutGlitchRegistry = builder.inputRef<any>("AlternativeFactCreateWithoutGlitchRegistry").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    gloriousMistakes: t.field({
      type: GloriousMistakeCreateRelationListWithoutAlternativeFact,
      required: false,
    }),
    singularityReport: t.field({
      type: SingularityReportCreateRelationWithoutAlternativeFact,
      required: true,
    }),
    symphonyChart: t.field({
      type: SymphonyChartCreateRelationWithoutAlternativeFacts,
      required: true,
    }),
  }),
});
