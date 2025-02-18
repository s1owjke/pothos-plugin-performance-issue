import { builder } from "src/builder";

import { ThresholdManifestCreateRelationWithoutHalfBakedIdeas } from "../thresholdManifest/createRelationWithoutHalfBakedIdeas";

export const HalfBakedIdeaCreateWithoutSymphonyChart = builder.inputRef<any>("HalfBakedIdeaCreateWithoutSymphonyChart").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    thresholdManifest: t.field({
      type: ThresholdManifestCreateRelationWithoutHalfBakedIdeas,
      required: true,
    }),
  }),
});
