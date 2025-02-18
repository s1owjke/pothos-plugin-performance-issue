import { builder } from "src/builder";

import { SymphonyChartUpdateRelationWithoutHalfBakedIdeas } from "../symphonyChart/updateRelationWithoutHalfBakedIdeas";
import { ThresholdManifestUpdateRelationWithoutHalfBakedIdeas } from "../thresholdManifest/updateRelationWithoutHalfBakedIdeas";

export const HalfBakedIdeaUpdate = builder.inputRef<any>("HalfBakedIdeaUpdate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    symphonyChart: t.field({
      type: SymphonyChartUpdateRelationWithoutHalfBakedIdeas,
      required: false,
    }),
    thresholdManifest: t.field({
      type: ThresholdManifestUpdateRelationWithoutHalfBakedIdeas,
      required: false,
    }),
  }),
});
