import { builder } from "src/builder";

import { InfiniteScrollLogUpdateRelationWithoutEmotionalSupportTables } from "../infiniteScrollLog/updateRelationWithoutEmotionalSupportTables";
import { PendingDisasterUpdateRelationListWithoutEmotionalSupportTable } from "../pendingDisaster/updateRelationListWithoutEmotionalSupportTable";
import { SingularityReportUpdateRelationWithoutEmotionalSupportTable } from "../singularityReport/updateRelationWithoutEmotionalSupportTable";

export const EmotionalSupportTableUpdateWithoutSymphonyChart = builder.inputRef<any>("EmotionalSupportTableUpdateWithoutSymphonyChart").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    infiniteScrollLog: t.field({
      type: InfiniteScrollLogUpdateRelationWithoutEmotionalSupportTables,
      required: false,
    }),
    pendingDisasters: t.field({
      type: PendingDisasterUpdateRelationListWithoutEmotionalSupportTable,
      required: false,
    }),
    singularityReport: t.field({
      type: SingularityReportUpdateRelationWithoutEmotionalSupportTable,
      required: false,
    }),
  }),
});
