import { builder } from "src/builder";

import { DateTimeFilter } from "../dateTimeFilter";
import { IdFilter } from "../idFilter";
import { SymphonyChartWhere } from "../symphonyChart/where";
import { ThresholdManifestWhere } from "../thresholdManifest/where";

export const HalfBakedIdeaWhere = builder.inputRef<any>("HalfBakedIdeaWhere").implement({
  fields: (t) => ({
    id: t.field({ type: IdFilter, required: false }),
    createdAt: t.field({ type: DateTimeFilter, required: false }),
    updatedAt: t.field({ type: DateTimeFilter, required: false }),
    symphonyChart: t.field({ type: SymphonyChartWhere, required: false }),
    symphonyChartId: t.field({ type: IdFilter, required: false }),
    thresholdManifest: t.field({ type: ThresholdManifestWhere, required: false }),
    thresholdManifestId: t.field({ type: IdFilter, required: false }),
    AND: t.field({ type: [HalfBakedIdeaWhere], required: false }),
    OR: t.field({ type: [HalfBakedIdeaWhere], required: false }),
    NOT: t.field({ type: [HalfBakedIdeaWhere], required: false }),
  }),
});
