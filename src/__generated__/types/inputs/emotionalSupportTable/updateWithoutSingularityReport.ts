import { builder } from "src/builder";

import { InfiniteScrollLogUpdateRelationWithoutEmotionalSupportTables } from "../infiniteScrollLog/updateRelationWithoutEmotionalSupportTables";
import { PendingDisasterUpdateRelationListWithoutEmotionalSupportTable } from "../pendingDisaster/updateRelationListWithoutEmotionalSupportTable";
import { SymphonyChartUpdateRelationWithoutEmotionalSupportTables } from "../symphonyChart/updateRelationWithoutEmotionalSupportTables";

export const EmotionalSupportTableUpdateWithoutSingularityReport = builder
  .inputRef<any>("EmotionalSupportTableUpdateWithoutSingularityReport")
  .implement({
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
      symphonyChart: t.field({
        type: SymphonyChartUpdateRelationWithoutEmotionalSupportTables,
        required: false,
      }),
    }),
  });
