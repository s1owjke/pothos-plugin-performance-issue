import { builder } from "src/builder";

import { SortOrder } from "../../../enums/sortOrder";
import { SymphonyChartOrderBy } from "../symphonyChart/orderBy";
import { ThresholdManifestOrderBy } from "../thresholdManifest/orderBy";

export const HalfBakedIdeaOrderBy = builder.inputRef<any>("HalfBakedIdeaOrderBy").implement({
  fields: (t) => ({
    id: t.field({ type: SortOrder, required: false }),
    createdAt: t.field({ type: SortOrder, required: false }),
    updatedAt: t.field({ type: SortOrder, required: false }),
    symphonyChart: t.field({ type: SymphonyChartOrderBy, required: false }),
    symphonyChartId: t.field({ type: SortOrder, required: false }),
    thresholdManifest: t.field({ type: ThresholdManifestOrderBy, required: false }),
    thresholdManifestId: t.field({ type: SortOrder, required: false }),
  }),
});
