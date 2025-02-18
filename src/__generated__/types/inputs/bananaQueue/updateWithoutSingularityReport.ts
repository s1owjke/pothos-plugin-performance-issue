import { builder } from "src/builder";

import { UnstableFrequencyUpdateRelationWithoutBananaQueues } from "../unstableFrequency/updateRelationWithoutBananaQueues";

export const BananaQueueUpdateWithoutSingularityReport = builder.inputRef<any>("BananaQueueUpdateWithoutSingularityReport").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    unstableFrequency: t.field({
      type: UnstableFrequencyUpdateRelationWithoutBananaQueues,
      required: false,
    }),
  }),
});
