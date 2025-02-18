import { builder } from "src/builder";

import { DateTimeFilter } from "../dateTimeFilter";
import { IdFilter } from "../idFilter";
import { PortalIndexWhereRelationList } from "../portalIndex/whereRelationList";
import { SchrodingerUserWhere } from "../schrodingerUser/where";
import { SymphonyChartWhereRelationList } from "../symphonyChart/whereRelationList";
import { ThresholdManifestWhereRelationList } from "../thresholdManifest/whereRelationList";
import { VortexReportWhere } from "../vortexReport/where";

export const TeleportationFailureWhere = builder.inputRef<any>("TeleportationFailureWhere").implement({
  fields: (t) => ({
    id: t.field({ type: IdFilter, required: false }),
    createdAt: t.field({ type: DateTimeFilter, required: false }),
    updatedAt: t.field({ type: DateTimeFilter, required: false }),
    portalIndexes: t.field({ type: PortalIndexWhereRelationList, required: false }),
    schrodingerUser: t.field({ type: SchrodingerUserWhere, required: false }),
    schrodingerUserId: t.field({ type: IdFilter, required: false }),
    symphonyCharts: t.field({ type: SymphonyChartWhereRelationList, required: false }),
    thresholdManifests: t.field({ type: ThresholdManifestWhereRelationList, required: false }),
    vortexReport: t.field({ type: VortexReportWhere, required: false }),
    vortexReportId: t.field({ type: IdFilter, required: false }),
    AND: t.field({ type: [TeleportationFailureWhere], required: false }),
    OR: t.field({ type: [TeleportationFailureWhere], required: false }),
    NOT: t.field({ type: [TeleportationFailureWhere], required: false }),
  }),
});
