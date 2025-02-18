import { builder } from "src/builder";

import { InfiniteScrollLogUpdateRelationWithoutEmotionalSupportTables } from "../infiniteScrollLog/updateRelationWithoutEmotionalSupportTables";
import { SingularityReportUpdateRelationWithoutEmotionalSupportTable } from "../singularityReport/updateRelationWithoutEmotionalSupportTable";
import { SymphonyChartUpdateRelationWithoutEmotionalSupportTables } from "../symphonyChart/updateRelationWithoutEmotionalSupportTables";

export const EmotionalSupportTableUpdateWithoutPendingDisasters = builder
  .inputRef<any>("EmotionalSupportTableUpdateWithoutPendingDisasters")
  .implement({
    fields: (t) => ({
      createdAt: t.field({ type: "DateTime", required: false }),
      updatedAt: t.field({ type: "DateTime", required: false }),
      infiniteScrollLog: t.field({
        type: InfiniteScrollLogUpdateRelationWithoutEmotionalSupportTables,
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
