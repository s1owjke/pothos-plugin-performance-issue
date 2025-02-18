import { builder } from "src/builder";

import { SymphonyChartUpdateRelationWithoutHalfBakedIdeas } from "../symphonyChart/updateRelationWithoutHalfBakedIdeas";

export const HalfBakedIdeaUpdateWithoutThresholdManifest = builder.inputRef<any>("HalfBakedIdeaUpdateWithoutThresholdManifest").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    symphonyChart: t.field({
      type: SymphonyChartUpdateRelationWithoutHalfBakedIdeas,
      required: false,
    }),
  }),
});
