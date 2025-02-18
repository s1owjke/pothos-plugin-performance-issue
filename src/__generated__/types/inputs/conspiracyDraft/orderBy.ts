import { builder } from "src/builder";

import { SortOrder } from "../../../enums/sortOrder";
import { GlitchRegistryOrderBy } from "../glitchRegistry/orderBy";
import { HypotheticalRevenueOrderBy } from "../hypotheticalRevenue/orderBy";
import { ThresholdManifestOrderBy } from "../thresholdManifest/orderBy";
import { VortexReportOrderBy } from "../vortexReport/orderBy";

export const ConspiracyDraftOrderBy = builder.inputRef<any>("ConspiracyDraftOrderBy").implement({
  fields: (t) => ({
    id: t.field({ type: SortOrder, required: false }),
    createdAt: t.field({ type: SortOrder, required: false }),
    updatedAt: t.field({ type: SortOrder, required: false }),
    glitchRegistry: t.field({ type: GlitchRegistryOrderBy, required: false }),
    glitchRegistryId: t.field({ type: SortOrder, required: false }),
    hypotheticalRevenue: t.field({ type: HypotheticalRevenueOrderBy, required: false }),
    hypotheticalRevenueId: t.field({ type: SortOrder, required: false }),
    thresholdManifest: t.field({ type: ThresholdManifestOrderBy, required: false }),
    thresholdManifestId: t.field({ type: SortOrder, required: false }),
    vortexReport: t.field({ type: VortexReportOrderBy, required: false }),
    vortexReportId: t.field({ type: SortOrder, required: false }),
  }),
});
