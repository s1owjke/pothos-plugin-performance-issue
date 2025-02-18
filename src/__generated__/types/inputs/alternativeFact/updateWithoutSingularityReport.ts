import { builder } from "src/builder";

import { GlitchRegistryUpdateRelationWithoutAlternativeFacts } from "../glitchRegistry/updateRelationWithoutAlternativeFacts";
import { GloriousMistakeUpdateRelationListWithoutAlternativeFact } from "../gloriousMistake/updateRelationListWithoutAlternativeFact";
import { SymphonyChartUpdateRelationWithoutAlternativeFacts } from "../symphonyChart/updateRelationWithoutAlternativeFacts";

export const AlternativeFactUpdateWithoutSingularityReport = builder.inputRef<any>("AlternativeFactUpdateWithoutSingularityReport").implement({
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
    symphonyChart: t.field({
      type: SymphonyChartUpdateRelationWithoutAlternativeFacts,
      required: false,
    }),
  }),
});
