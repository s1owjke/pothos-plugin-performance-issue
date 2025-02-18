import { builder } from "src/builder";

import { AlternativeFactWhereRelationList } from "../alternativeFact/whereRelationList";
import { ConspiracyDraftWhereRelationList } from "../conspiracyDraft/whereRelationList";
import { DateTimeFilter } from "../dateTimeFilter";
import { EchoChamberWhere } from "../echoChamber/where";
import { IdFilter } from "../idFilter";
import { OverwrittenLegacyWhere } from "../overwrittenLegacy/where";
import { PendingDisasterWhereRelationList } from "../pendingDisaster/whereRelationList";
import { SingularityReportWhere } from "../singularityReport/where";
import { SymphonyChartWhere } from "../symphonyChart/where";
import { ThresholdManifestWhereRelationList } from "../thresholdManifest/whereRelationList";

export const GlitchRegistryWhere = builder.inputRef<any>("GlitchRegistryWhere").implement({
  fields: (t) => ({
    id: t.field({ type: IdFilter, required: false }),
    createdAt: t.field({ type: DateTimeFilter, required: false }),
    updatedAt: t.field({ type: DateTimeFilter, required: false }),
    alternativeFacts: t.field({ type: AlternativeFactWhereRelationList, required: false }),
    conspiracyDrafts: t.field({ type: ConspiracyDraftWhereRelationList, required: false }),
    echoChamber: t.field({ type: EchoChamberWhere, required: false }),
    overwrittenLegacy: t.field({ type: OverwrittenLegacyWhere, required: false }),
    overwrittenLegacyId: t.field({ type: IdFilter, required: false }),
    pendingDisasters: t.field({ type: PendingDisasterWhereRelationList, required: false }),
    singularityReport: t.field({ type: SingularityReportWhere, required: false }),
    singularityReportId: t.field({ type: IdFilter, required: false }),
    symphonyChart: t.field({ type: SymphonyChartWhere, required: false }),
    symphonyChartId: t.field({ type: IdFilter, required: false }),
    thresholdManifests: t.field({ type: ThresholdManifestWhereRelationList, required: false }),
    verifierStaffId: t.field({ type: IdFilter, required: false }),
    AND: t.field({ type: [GlitchRegistryWhere], required: false }),
    OR: t.field({ type: [GlitchRegistryWhere], required: false }),
    NOT: t.field({ type: [GlitchRegistryWhere], required: false }),
  }),
});
