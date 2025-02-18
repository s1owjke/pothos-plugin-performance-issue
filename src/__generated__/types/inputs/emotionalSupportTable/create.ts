import { builder } from "src/builder";

import { InfiniteScrollLogCreateRelationWithoutEmotionalSupportTables } from "../infiniteScrollLog/createRelationWithoutEmotionalSupportTables";
import { PendingDisasterCreateRelationListWithoutEmotionalSupportTable } from "../pendingDisaster/createRelationListWithoutEmotionalSupportTable";
import { SingularityReportCreateRelationWithoutEmotionalSupportTable } from "../singularityReport/createRelationWithoutEmotionalSupportTable";
import { SymphonyChartCreateRelationWithoutEmotionalSupportTables } from "../symphonyChart/createRelationWithoutEmotionalSupportTables";

export const EmotionalSupportTableCreate = builder.inputRef<any>("EmotionalSupportTableCreate").implement({
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
    symphonyChart: t.field({
      type: SymphonyChartCreateRelationWithoutEmotionalSupportTables,
      required: true,
    }),
  }),
});
