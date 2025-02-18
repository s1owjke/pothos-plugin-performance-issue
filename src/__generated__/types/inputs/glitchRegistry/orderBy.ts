import { builder } from "src/builder";

import { SortOrder } from "../../../enums/sortOrder";
import { EchoChamberOrderBy } from "../echoChamber/orderBy";
import { OverwrittenLegacyOrderBy } from "../overwrittenLegacy/orderBy";
import { SingularityReportOrderBy } from "../singularityReport/orderBy";
import { SymphonyChartOrderBy } from "../symphonyChart/orderBy";

export const GlitchRegistryOrderBy = builder.inputRef<any>("GlitchRegistryOrderBy").implement({
  fields: (t) => ({
    id: t.field({ type: SortOrder, required: false }),
    createdAt: t.field({ type: SortOrder, required: false }),
    updatedAt: t.field({ type: SortOrder, required: false }),
    echoChamber: t.field({ type: EchoChamberOrderBy, required: false }),
    overwrittenLegacy: t.field({ type: OverwrittenLegacyOrderBy, required: false }),
    overwrittenLegacyId: t.field({ type: SortOrder, required: false }),
    singularityReport: t.field({ type: SingularityReportOrderBy, required: false }),
    singularityReportId: t.field({ type: SortOrder, required: false }),
    symphonyChart: t.field({ type: SymphonyChartOrderBy, required: false }),
    symphonyChartId: t.field({ type: SortOrder, required: false }),
    verifierStaffId: t.field({ type: SortOrder, required: false }),
  }),
});
