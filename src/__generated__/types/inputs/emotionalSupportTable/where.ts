import { builder } from "src/builder";

import { DateTimeFilter } from "../dateTimeFilter";
import { IdFilter } from "../idFilter";
import { InfiniteScrollLogWhere } from "../infiniteScrollLog/where";
import { PendingDisasterWhereRelationList } from "../pendingDisaster/whereRelationList";
import { SingularityReportWhere } from "../singularityReport/where";
import { SymphonyChartWhere } from "../symphonyChart/where";

export const EmotionalSupportTableWhere = builder.inputRef<any>("EmotionalSupportTableWhere").implement({
  fields: (t) => ({
    id: t.field({ type: IdFilter, required: false }),
    createdAt: t.field({ type: DateTimeFilter, required: false }),
    updatedAt: t.field({ type: DateTimeFilter, required: false }),
    infiniteScrollLog: t.field({ type: InfiniteScrollLogWhere, required: false }),
    infiniteScrollLogId: t.field({ type: IdFilter, required: false }),
    pendingDisasters: t.field({ type: PendingDisasterWhereRelationList, required: false }),
    singularityReport: t.field({ type: SingularityReportWhere, required: false }),
    singularityReportId: t.field({ type: IdFilter, required: false }),
    symphonyChart: t.field({ type: SymphonyChartWhere, required: false }),
    symphonyChartId: t.field({ type: IdFilter, required: false }),
    AND: t.field({ type: [EmotionalSupportTableWhere], required: false }),
    OR: t.field({ type: [EmotionalSupportTableWhere], required: false }),
    NOT: t.field({ type: [EmotionalSupportTableWhere], required: false }),
  }),
});
