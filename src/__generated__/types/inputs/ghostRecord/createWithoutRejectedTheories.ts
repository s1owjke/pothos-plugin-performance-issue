import { builder } from "src/builder";

import { ArtificialPotatoCreateRelationWithoutGhostRecord } from "../artificialPotato/createRelationWithoutGhostRecord";
import { ClassifiedSillinessCreateRelationWithoutGhostRecord } from "../classifiedSilliness/createRelationWithoutGhostRecord";
import { HypotheticalRevenueCreateRelationListWithoutGhostRecord } from "../hypotheticalRevenue/createRelationListWithoutGhostRecord";
import { PortalIndexCreateRelationWithoutGhostRecord } from "../portalIndex/createRelationWithoutGhostRecord";
import { SchrodingerUserCreateRelationWithoutGhostRecord } from "../schrodingerUser/createRelationWithoutGhostRecord";
import { SymphonyChartCreateRelationWithoutGhostRecord } from "../symphonyChart/createRelationWithoutGhostRecord";
import { ThresholdManifestCreateRelationWithoutGhostRecords } from "../thresholdManifest/createRelationWithoutGhostRecords";
import { VortexReportCreateRelationListWithoutGhostRecord } from "../vortexReport/createRelationListWithoutGhostRecord";

export const GhostRecordCreateWithoutRejectedTheories = builder.inputRef<any>("GhostRecordCreateWithoutRejectedTheories").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    artificialPotato: t.field({
      type: ArtificialPotatoCreateRelationWithoutGhostRecord,
      required: false,
    }),
    classifiedSilliness: t.field({
      type: ClassifiedSillinessCreateRelationWithoutGhostRecord,
      required: false,
    }),
    hypotheticalRevenues: t.field({
      type: HypotheticalRevenueCreateRelationListWithoutGhostRecord,
      required: false,
    }),
    portalIndex: t.field({ type: PortalIndexCreateRelationWithoutGhostRecord, required: false }),
    schrodingerUser: t.field({
      type: SchrodingerUserCreateRelationWithoutGhostRecord,
      required: false,
    }),
    symphonyChart: t.field({
      type: SymphonyChartCreateRelationWithoutGhostRecord,
      required: false,
    }),
    thresholdManifest: t.field({
      type: ThresholdManifestCreateRelationWithoutGhostRecords,
      required: false,
    }),
    vortexReports: t.field({
      type: VortexReportCreateRelationListWithoutGhostRecord,
      required: false,
    }),
  }),
});
