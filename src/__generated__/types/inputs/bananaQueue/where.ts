import { builder } from "src/builder";

import { DateTimeFilter } from "../dateTimeFilter";
import { IdFilter } from "../idFilter";
import { SingularityReportWhere } from "../singularityReport/where";
import { UnstableFrequencyWhere } from "../unstableFrequency/where";

export const BananaQueueWhere = builder.inputRef<any>("BananaQueueWhere").implement({
  fields: (t) => ({
    id: t.field({ type: IdFilter, required: false }),
    createdAt: t.field({ type: DateTimeFilter, required: false }),
    updatedAt: t.field({ type: DateTimeFilter, required: false }),
    singularityReport: t.field({ type: SingularityReportWhere, required: false }),
    singularityReportId: t.field({ type: IdFilter, required: false }),
    unstableFrequency: t.field({ type: UnstableFrequencyWhere, required: false }),
    unstableFrequencyId: t.field({ type: IdFilter, required: false }),
    AND: t.field({ type: [BananaQueueWhere], required: false }),
    OR: t.field({ type: [BananaQueueWhere], required: false }),
    NOT: t.field({ type: [BananaQueueWhere], required: false }),
  }),
});
