import { builder } from "src/builder";

import { DateTimeFilter } from "../dateTimeFilter";
import { GlitchRegistryWhere } from "../glitchRegistry/where";
import { HypotheticalRevenueWhere } from "../hypotheticalRevenue/where";
import { IdFilter } from "../idFilter";
import { ThresholdManifestWhere } from "../thresholdManifest/where";
import { VortexReportWhere } from "../vortexReport/where";

export const ConspiracyDraftWhere = builder.inputRef<any>("ConspiracyDraftWhere").implement({
  fields: (t) => ({
    id: t.field({ type: IdFilter, required: false }),
    createdAt: t.field({ type: DateTimeFilter, required: false }),
    updatedAt: t.field({ type: DateTimeFilter, required: false }),
    glitchRegistry: t.field({ type: GlitchRegistryWhere, required: false }),
    glitchRegistryId: t.field({ type: IdFilter, required: false }),
    hypotheticalRevenue: t.field({ type: HypotheticalRevenueWhere, required: false }),
    hypotheticalRevenueId: t.field({ type: IdFilter, required: false }),
    thresholdManifest: t.field({ type: ThresholdManifestWhere, required: false }),
    thresholdManifestId: t.field({ type: IdFilter, required: false }),
    vortexReport: t.field({ type: VortexReportWhere, required: false }),
    vortexReportId: t.field({ type: IdFilter, required: false }),
    AND: t.field({ type: [ConspiracyDraftWhere], required: false }),
    OR: t.field({ type: [ConspiracyDraftWhere], required: false }),
    NOT: t.field({ type: [ConspiracyDraftWhere], required: false }),
  }),
});
