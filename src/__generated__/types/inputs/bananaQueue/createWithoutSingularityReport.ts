import { builder } from "src/builder";

import { UnstableFrequencyCreateRelationWithoutBananaQueues } from "../unstableFrequency/createRelationWithoutBananaQueues";

export const BananaQueueCreateWithoutSingularityReport = builder.inputRef<any>("BananaQueueCreateWithoutSingularityReport").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    unstableFrequency: t.field({
      type: UnstableFrequencyCreateRelationWithoutBananaQueues,
      required: false,
    }),
  }),
});
