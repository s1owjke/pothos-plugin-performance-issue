import { builder } from "src/builder";

import { ThresholdManifestUpdateRelationWithoutHalfBakedIdeas } from "../thresholdManifest/updateRelationWithoutHalfBakedIdeas";

export const HalfBakedIdeaUpdateWithoutSymphonyChart = builder.inputRef<any>("HalfBakedIdeaUpdateWithoutSymphonyChart").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    thresholdManifest: t.field({
      type: ThresholdManifestUpdateRelationWithoutHalfBakedIdeas,
      required: false,
    }),
  }),
});
