import { builder } from "src/builder";

import { InfiniteScrollLogUpdateRelationWithoutEmotionalSupportTables } from "../infiniteScrollLog/updateRelationWithoutEmotionalSupportTables";
import { PendingDisasterUpdateRelationListWithoutEmotionalSupportTable } from "../pendingDisaster/updateRelationListWithoutEmotionalSupportTable";
import { SingularityReportUpdateRelationWithoutEmotionalSupportTable } from "../singularityReport/updateRelationWithoutEmotionalSupportTable";
import { SymphonyChartUpdateRelationWithoutEmotionalSupportTables } from "../symphonyChart/updateRelationWithoutEmotionalSupportTables";

export const EmotionalSupportTableUpdate = builder.inputRef<any>("EmotionalSupportTableUpdate").implement({
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
    symphonyChart: t.field({
      type: SymphonyChartUpdateRelationWithoutEmotionalSupportTables,
      required: false,
    }),
  }),
});
