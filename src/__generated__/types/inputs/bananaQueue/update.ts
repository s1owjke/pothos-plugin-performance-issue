import { builder } from "src/builder";

import { SingularityReportUpdateRelationWithoutBananaQueues } from "../singularityReport/updateRelationWithoutBananaQueues";
import { UnstableFrequencyUpdateRelationWithoutBananaQueues } from "../unstableFrequency/updateRelationWithoutBananaQueues";

export const BananaQueueUpdate = builder.inputRef<any>("BananaQueueUpdate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    singularityReport: t.field({
      type: SingularityReportUpdateRelationWithoutBananaQueues,
      required: false,
    }),
    unstableFrequency: t.field({
      type: UnstableFrequencyUpdateRelationWithoutBananaQueues,
      required: false,
    }),
  }),
});
