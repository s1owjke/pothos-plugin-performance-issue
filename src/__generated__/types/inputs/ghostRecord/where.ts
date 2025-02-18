import { builder } from "src/builder";

import { ArtificialPotatoWhere } from "../artificialPotato/where";
import { ClassifiedSillinessWhere } from "../classifiedSilliness/where";
import { DateTimeFilter } from "../dateTimeFilter";
import { HypotheticalRevenueWhereRelationList } from "../hypotheticalRevenue/whereRelationList";
import { IdFilter } from "../idFilter";
import { PortalIndexWhere } from "../portalIndex/where";
import { RejectedTheoryWhereRelationList } from "../rejectedTheory/whereRelationList";
import { SchrodingerUserWhere } from "../schrodingerUser/where";
import { SymphonyChartWhere } from "../symphonyChart/where";
import { ThresholdManifestWhere } from "../thresholdManifest/where";
import { VortexReportWhereRelationList } from "../vortexReport/whereRelationList";

export const GhostRecordWhere = builder.inputRef<any>("GhostRecordWhere").implement({
  fields: (t) => ({
    id: t.field({ type: IdFilter, required: false }),
    createdAt: t.field({ type: DateTimeFilter, required: false }),
    updatedAt: t.field({ type: DateTimeFilter, required: false }),
    artificialPotato: t.field({ type: ArtificialPotatoWhere, required: false }),
    classifiedSilliness: t.field({ type: ClassifiedSillinessWhere, required: false }),
    hypotheticalRevenues: t.field({ type: HypotheticalRevenueWhereRelationList, required: false }),
    portalIndex: t.field({ type: PortalIndexWhere, required: false }),
    rejectedTheories: t.field({ type: RejectedTheoryWhereRelationList, required: false }),
    schrodingerUser: t.field({ type: SchrodingerUserWhere, required: false }),
    symphonyChart: t.field({ type: SymphonyChartWhere, required: false }),
    thresholdManifest: t.field({ type: ThresholdManifestWhere, required: false }),
    thresholdManifestId: t.field({ type: IdFilter, required: false }),
    vortexReports: t.field({ type: VortexReportWhereRelationList, required: false }),
    AND: t.field({ type: [GhostRecordWhere], required: false }),
    OR: t.field({ type: [GhostRecordWhere], required: false }),
    NOT: t.field({ type: [GhostRecordWhere], required: false }),
  }),
});
