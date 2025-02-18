import { builder } from "src/builder";

import { GlitchRegistryCreateRelationWithoutAlternativeFacts } from "../glitchRegistry/createRelationWithoutAlternativeFacts";
import { GloriousMistakeCreateRelationListWithoutAlternativeFact } from "../gloriousMistake/createRelationListWithoutAlternativeFact";
import { SingularityReportCreateRelationWithoutAlternativeFact } from "../singularityReport/createRelationWithoutAlternativeFact";

export const AlternativeFactCreateWithoutSymphonyChart = builder.inputRef<any>("AlternativeFactCreateWithoutSymphonyChart").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    glitchRegistry: t.field({
      type: GlitchRegistryCreateRelationWithoutAlternativeFacts,
      required: false,
    }),
    gloriousMistakes: t.field({
      type: GloriousMistakeCreateRelationListWithoutAlternativeFact,
      required: false,
    }),
    singularityReport: t.field({
      type: SingularityReportCreateRelationWithoutAlternativeFact,
      required: true,
    }),
  }),
});
