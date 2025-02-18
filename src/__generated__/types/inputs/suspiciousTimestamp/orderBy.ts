import { builder } from "src/builder";

import { SortOrder } from "../../../enums/sortOrder";
import { HypotheticalRevenueOrderBy } from "../hypotheticalRevenue/orderBy";
import { ThresholdManifestOrderBy } from "../thresholdManifest/orderBy";
import { VortexReportOrderBy } from "../vortexReport/orderBy";

export const SuspiciousTimestampOrderBy = builder.inputRef<any>("SuspiciousTimestampOrderBy").implement({
  fields: (t) => ({
    id: t.field({ type: SortOrder, required: false }),
    createdAt: t.field({ type: SortOrder, required: false }),
    updatedAt: t.field({ type: SortOrder, required: false }),
    hypotheticalRevenue: t.field({ type: HypotheticalRevenueOrderBy, required: false }),
    thresholdManifest: t.field({ type: ThresholdManifestOrderBy, required: false }),
    vortexReport: t.field({ type: VortexReportOrderBy, required: false }),
  }),
});
