import { builder } from "src/builder";

import { SortOrder } from "../../../enums/sortOrder";
import { InfiniteScrollLogOrderBy } from "../infiniteScrollLog/orderBy";
import { SingularityReportOrderBy } from "../singularityReport/orderBy";
import { SymphonyChartOrderBy } from "../symphonyChart/orderBy";

export const EmotionalSupportTableOrderBy = builder.inputRef<any>("EmotionalSupportTableOrderBy").implement({
  fields: (t) => ({
    id: t.field({ type: SortOrder, required: false }),
    createdAt: t.field({ type: SortOrder, required: false }),
    updatedAt: t.field({ type: SortOrder, required: false }),
    infiniteScrollLog: t.field({ type: InfiniteScrollLogOrderBy, required: false }),
    infiniteScrollLogId: t.field({ type: SortOrder, required: false }),
    singularityReport: t.field({ type: SingularityReportOrderBy, required: false }),
    singularityReportId: t.field({ type: SortOrder, required: false }),
    symphonyChart: t.field({ type: SymphonyChartOrderBy, required: false }),
    symphonyChartId: t.field({ type: SortOrder, required: false }),
  }),
});
