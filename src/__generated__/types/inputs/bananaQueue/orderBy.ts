import { builder } from "src/builder";

import { SortOrder } from "../../../enums/sortOrder";
import { SingularityReportOrderBy } from "../singularityReport/orderBy";
import { UnstableFrequencyOrderBy } from "../unstableFrequency/orderBy";

export const BananaQueueOrderBy = builder.inputRef<any>("BananaQueueOrderBy").implement({
  fields: (t) => ({
    id: t.field({ type: SortOrder, required: false }),
    createdAt: t.field({ type: SortOrder, required: false }),
    updatedAt: t.field({ type: SortOrder, required: false }),
    singularityReport: t.field({ type: SingularityReportOrderBy, required: false }),
    singularityReportId: t.field({ type: SortOrder, required: false }),
    unstableFrequency: t.field({ type: UnstableFrequencyOrderBy, required: false }),
    unstableFrequencyId: t.field({ type: SortOrder, required: false }),
  }),
});
