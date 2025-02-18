import { builder } from "src/builder";

import { SortOrder } from "../../../enums/sortOrder";
import { GlitchRegistryOrderBy } from "../glitchRegistry/orderBy";
import { SingularityReportOrderBy } from "../singularityReport/orderBy";
import { SymphonyChartOrderBy } from "../symphonyChart/orderBy";

export const AlternativeFactOrderBy = builder.inputRef<any>("AlternativeFactOrderBy").implement({
  fields: (t) => ({
    id: t.field({ type: SortOrder, required: false }),
    createdAt: t.field({ type: SortOrder, required: false }),
    updatedAt: t.field({ type: SortOrder, required: false }),
    glitchRegistry: t.field({ type: GlitchRegistryOrderBy, required: false }),
    glitchRegistryId: t.field({ type: SortOrder, required: false }),
    singularityReport: t.field({ type: SingularityReportOrderBy, required: false }),
    singularityReportId: t.field({ type: SortOrder, required: false }),
    symphonyChart: t.field({ type: SymphonyChartOrderBy, required: false }),
    symphonyChartId: t.field({ type: SortOrder, required: false }),
  }),
});
