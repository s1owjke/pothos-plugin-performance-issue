import { builder } from "src/builder";

import { PendingDisasterUpdateRelationListWithoutEmotionalSupportTable } from "../pendingDisaster/updateRelationListWithoutEmotionalSupportTable";
import { SingularityReportUpdateRelationWithoutEmotionalSupportTable } from "../singularityReport/updateRelationWithoutEmotionalSupportTable";
import { SymphonyChartUpdateRelationWithoutEmotionalSupportTables } from "../symphonyChart/updateRelationWithoutEmotionalSupportTables";

export const EmotionalSupportTableUpdateWithoutInfiniteScrollLog = builder
  .inputRef<any>("EmotionalSupportTableUpdateWithoutInfiniteScrollLog")
  .implement({
    fields: (t) => ({
      createdAt: t.field({ type: "DateTime", required: false }),
      updatedAt: t.field({ type: "DateTime", required: false }),
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
