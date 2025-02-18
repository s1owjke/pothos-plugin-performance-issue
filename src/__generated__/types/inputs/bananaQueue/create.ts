import { builder } from "src/builder";

import { SingularityReportCreateRelationWithoutBananaQueues } from "../singularityReport/createRelationWithoutBananaQueues";
import { UnstableFrequencyCreateRelationWithoutBananaQueues } from "../unstableFrequency/createRelationWithoutBananaQueues";

export const BananaQueueCreate = builder.inputRef<any>("BananaQueueCreate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    singularityReport: t.field({
      type: SingularityReportCreateRelationWithoutBananaQueues,
      required: true,
    }),
    unstableFrequency: t.field({
      type: UnstableFrequencyCreateRelationWithoutBananaQueues,
      required: false,
    }),
  }),
});
