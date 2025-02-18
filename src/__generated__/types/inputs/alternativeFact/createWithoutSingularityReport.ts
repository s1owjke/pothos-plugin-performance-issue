import { builder } from "src/builder";

import { GlitchRegistryCreateRelationWithoutAlternativeFacts } from "../glitchRegistry/createRelationWithoutAlternativeFacts";
import { GloriousMistakeCreateRelationListWithoutAlternativeFact } from "../gloriousMistake/createRelationListWithoutAlternativeFact";
import { SymphonyChartCreateRelationWithoutAlternativeFacts } from "../symphonyChart/createRelationWithoutAlternativeFacts";

export const AlternativeFactCreateWithoutSingularityReport = builder.inputRef<any>("AlternativeFactCreateWithoutSingularityReport").implement({
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
    symphonyChart: t.field({
      type: SymphonyChartCreateRelationWithoutAlternativeFacts,
      required: true,
    }),
  }),
});
