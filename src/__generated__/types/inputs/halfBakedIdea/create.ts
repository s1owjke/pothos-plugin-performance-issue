import { builder } from "src/builder";

import { SymphonyChartCreateRelationWithoutHalfBakedIdeas } from "../symphonyChart/createRelationWithoutHalfBakedIdeas";
import { ThresholdManifestCreateRelationWithoutHalfBakedIdeas } from "../thresholdManifest/createRelationWithoutHalfBakedIdeas";

export const HalfBakedIdeaCreate = builder.inputRef<any>("HalfBakedIdeaCreate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    symphonyChart: t.field({
      type: SymphonyChartCreateRelationWithoutHalfBakedIdeas,
      required: true,
    }),
    thresholdManifest: t.field({
      type: ThresholdManifestCreateRelationWithoutHalfBakedIdeas,
      required: true,
    }),
  }),
});
