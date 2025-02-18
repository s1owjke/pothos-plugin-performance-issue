import { builder } from "src/builder";

import { SymphonyChartCreateRelationWithoutHalfBakedIdeas } from "../symphonyChart/createRelationWithoutHalfBakedIdeas";

export const HalfBakedIdeaCreateWithoutThresholdManifest = builder.inputRef<any>("HalfBakedIdeaCreateWithoutThresholdManifest").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    symphonyChart: t.field({
      type: SymphonyChartCreateRelationWithoutHalfBakedIdeas,
      required: true,
    }),
  }),
});
