import { builder } from "src/builder";

import { InfiniteScrollLogCreateRelationWithoutEmotionalSupportTables } from "../infiniteScrollLog/createRelationWithoutEmotionalSupportTables";
import { PendingDisasterCreateRelationListWithoutEmotionalSupportTable } from "../pendingDisaster/createRelationListWithoutEmotionalSupportTable";
import { SymphonyChartCreateRelationWithoutEmotionalSupportTables } from "../symphonyChart/createRelationWithoutEmotionalSupportTables";

export const EmotionalSupportTableCreateWithoutSingularityReport = builder
  .inputRef<any>("EmotionalSupportTableCreateWithoutSingularityReport")
  .implement({
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
      symphonyChart: t.field({
        type: SymphonyChartCreateRelationWithoutEmotionalSupportTables,
        required: true,
      }),
    }),
  });
