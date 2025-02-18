import { builder } from "src/builder";

import { GlitchRegistryCreateRelationWithoutAlternativeFacts } from "../glitchRegistry/createRelationWithoutAlternativeFacts";
import { SingularityReportCreateRelationWithoutAlternativeFact } from "../singularityReport/createRelationWithoutAlternativeFact";
import { SymphonyChartCreateRelationWithoutAlternativeFacts } from "../symphonyChart/createRelationWithoutAlternativeFacts";

export const AlternativeFactCreateWithoutGloriousMistakes = builder.inputRef<any>("AlternativeFactCreateWithoutGloriousMistakes").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    glitchRegistry: t.field({
      type: GlitchRegistryCreateRelationWithoutAlternativeFacts,
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
