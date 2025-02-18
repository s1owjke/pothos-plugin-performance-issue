import { builder } from "src/builder";

import { PendingDisasterCreateRelationListWithoutEmotionalSupportTable } from "../pendingDisaster/createRelationListWithoutEmotionalSupportTable";
import { SingularityReportCreateRelationWithoutEmotionalSupportTable } from "../singularityReport/createRelationWithoutEmotionalSupportTable";
import { SymphonyChartCreateRelationWithoutEmotionalSupportTables } from "../symphonyChart/createRelationWithoutEmotionalSupportTables";

export const EmotionalSupportTableCreateWithoutInfiniteScrollLog = builder
  .inputRef<any>("EmotionalSupportTableCreateWithoutInfiniteScrollLog")
  .implement({
    fields: (t) => ({
      createdAt: t.field({ type: "DateTime", required: true }),
      updatedAt: t.field({ type: "DateTime", required: true }),
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
