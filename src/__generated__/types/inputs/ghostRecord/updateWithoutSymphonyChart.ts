import { builder } from "src/builder";

import { ArtificialPotatoUpdateRelationWithoutGhostRecord } from "../artificialPotato/updateRelationWithoutGhostRecord";
import { ClassifiedSillinessUpdateRelationWithoutGhostRecord } from "../classifiedSilliness/updateRelationWithoutGhostRecord";
import { HypotheticalRevenueUpdateRelationListWithoutGhostRecord } from "../hypotheticalRevenue/updateRelationListWithoutGhostRecord";
import { PortalIndexUpdateRelationWithoutGhostRecord } from "../portalIndex/updateRelationWithoutGhostRecord";
import { RejectedTheoryUpdateRelationListWithoutGhostRecord } from "../rejectedTheory/updateRelationListWithoutGhostRecord";
import { SchrodingerUserUpdateRelationWithoutGhostRecord } from "../schrodingerUser/updateRelationWithoutGhostRecord";
import { ThresholdManifestUpdateRelationWithoutGhostRecords } from "../thresholdManifest/updateRelationWithoutGhostRecords";
import { VortexReportUpdateRelationListWithoutGhostRecord } from "../vortexReport/updateRelationListWithoutGhostRecord";

export const GhostRecordUpdateWithoutSymphonyChart = builder.inputRef<any>("GhostRecordUpdateWithoutSymphonyChart").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    artificialPotato: t.field({
      type: ArtificialPotatoUpdateRelationWithoutGhostRecord,
      required: false,
    }),
    classifiedSilliness: t.field({
      type: ClassifiedSillinessUpdateRelationWithoutGhostRecord,
      required: false,
    }),
    hypotheticalRevenues: t.field({
      type: HypotheticalRevenueUpdateRelationListWithoutGhostRecord,
      required: false,
    }),
    portalIndex: t.field({ type: PortalIndexUpdateRelationWithoutGhostRecord, required: false }),
    rejectedTheories: t.field({
      type: RejectedTheoryUpdateRelationListWithoutGhostRecord,
      required: false,
    }),
    schrodingerUser: t.field({
      type: SchrodingerUserUpdateRelationWithoutGhostRecord,
      required: false,
    }),
    thresholdManifest: t.field({
      type: ThresholdManifestUpdateRelationWithoutGhostRecords,
      required: false,
    }),
    vortexReports: t.field({
      type: VortexReportUpdateRelationListWithoutGhostRecord,
      required: false,
    }),
  }),
});
