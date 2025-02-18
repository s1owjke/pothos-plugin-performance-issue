import { builder } from "src/builder";

import { InfiniteScrollLogCreateRelationWithoutEmotionalSupportTables } from "../infiniteScrollLog/createRelationWithoutEmotionalSupportTables";
import { SingularityReportCreateRelationWithoutEmotionalSupportTable } from "../singularityReport/createRelationWithoutEmotionalSupportTable";
import { SymphonyChartCreateRelationWithoutEmotionalSupportTables } from "../symphonyChart/createRelationWithoutEmotionalSupportTables";

export const EmotionalSupportTableCreateWithoutPendingDisasters = builder
  .inputRef<any>("EmotionalSupportTableCreateWithoutPendingDisasters")
  .implement({
    fields: (t) => ({
      createdAt: t.field({ type: "DateTime", required: true }),
      updatedAt: t.field({ type: "DateTime", required: true }),
      infiniteScrollLog: t.field({
        type: InfiniteScrollLogCreateRelationWithoutEmotionalSupportTables,
        required: true,
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
