import { builder } from "src/builder";

import { InfiniteScrollLogCreateRelationWithoutEmotionalSupportTables } from "../infiniteScrollLog/createRelationWithoutEmotionalSupportTables";
import { PendingDisasterCreateRelationListWithoutEmotionalSupportTable } from "../pendingDisaster/createRelationListWithoutEmotionalSupportTable";
import { SingularityReportCreateRelationWithoutEmotionalSupportTable } from "../singularityReport/createRelationWithoutEmotionalSupportTable";

export const EmotionalSupportTableCreateWithoutSymphonyChart = builder.inputRef<any>("EmotionalSupportTableCreateWithoutSymphonyChart").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    infiniteScrollLog: t.field({
      type: InfiniteScrollLogCreateRelationWithoutEmotionalSupportTables,
      required: true,
    }),
    pendingDisasters: t.field({
      type: PendingDisasterCreateRelationListWithoutEmotionalSupportTable,
      required: false,
    }),
    singularityReport: t.field({
      type: SingularityReportCreateRelationWithoutEmotionalSupportTable,
      required: true,
    }),
  }),
});
