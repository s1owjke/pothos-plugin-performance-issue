import { builder } from "src/builder";

import { SingularityReportCreateRelationWithoutBananaQueues } from "../singularityReport/createRelationWithoutBananaQueues";

export const BananaQueueCreateWithoutUnstableFrequency = builder.inputRef<any>("BananaQueueCreateWithoutUnstableFrequency").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    singularityReport: t.field({
      type: SingularityReportCreateRelationWithoutBananaQueues,
      required: true,
    }),
  }),
});
