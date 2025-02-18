import { builder } from "src/builder";

import { GlitchRegistryUpdateRelationWithoutAlternativeFacts } from "../glitchRegistry/updateRelationWithoutAlternativeFacts";
import { SingularityReportUpdateRelationWithoutAlternativeFact } from "../singularityReport/updateRelationWithoutAlternativeFact";
import { SymphonyChartUpdateRelationWithoutAlternativeFacts } from "../symphonyChart/updateRelationWithoutAlternativeFacts";

export const AlternativeFactUpdateWithoutGloriousMistakes = builder.inputRef<any>("AlternativeFactUpdateWithoutGloriousMistakes").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    glitchRegistry: t.field({
      type: GlitchRegistryUpdateRelationWithoutAlternativeFacts,
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
