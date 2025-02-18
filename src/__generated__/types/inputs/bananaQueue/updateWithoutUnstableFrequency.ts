import { builder } from "src/builder";

import { SingularityReportUpdateRelationWithoutBananaQueues } from "../singularityReport/updateRelationWithoutBananaQueues";

export const BananaQueueUpdateWithoutUnstableFrequency = builder.inputRef<any>("BananaQueueUpdateWithoutUnstableFrequency").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    singularityReport: t.field({
      type: SingularityReportUpdateRelationWithoutBananaQueues,
      required: false,
    }),
  }),
});
