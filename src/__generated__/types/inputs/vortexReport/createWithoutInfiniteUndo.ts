import { builder } from "src/builder";

import { ConspiracyDraftCreateRelationListWithoutVortexReport } from "../conspiracyDraft/createRelationListWithoutVortexReport";
import { CosmicDebriCreateRelationWithoutVortexReport } from "../cosmicDebri/createRelationWithoutVortexReport";
import { GhostRecordCreateRelationWithoutVortexReports } from "../ghostRecord/createRelationWithoutVortexReports";
import { HypotheticalRevenueCreateRelationWithoutVortexReports } from "../hypotheticalRevenue/createRelationWithoutVortexReports";
import { RealmDirectoryCreateRelationWithoutVortexReport } from "../realmDirectory/createRelationWithoutVortexReport";
import { ReverseTransactionCreateRelationListWithoutVortexReport } from "../reverseTransaction/createRelationListWithoutVortexReport";
import { SuspiciousTimestampCreateRelationWithoutVortexReport } from "../suspiciousTimestamp/createRelationWithoutVortexReport";
import { TeleportationFailureCreateRelationListWithoutVortexReport } from "../teleportationFailure/createRelationListWithoutVortexReport";
import { ThresholdManifestCreateRelationListWithoutVortexReport } from "../thresholdManifest/createRelationListWithoutVortexReport";
import { TimeTravelLogCreateRelationWithoutVortexReport } from "../timeTravelLog/createRelationWithoutVortexReport";
import { UnnecessaryPermissionCreateRelationWithoutVortexReport } from "../unnecessaryPermission/createRelationWithoutVortexReport";
import { UnstableFrequencyCreateRelationWithoutVortexReports } from "../unstableFrequency/createRelationWithoutVortexReports";

export const VortexReportCreateWithoutInfiniteUndo = builder.inputRef<any>("VortexReportCreateWithoutInfiniteUndo").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    conspiracyDrafts: t.field({
      type: ConspiracyDraftCreateRelationListWithoutVortexReport,
      required: false,
    }),
    cosmicDebris: t.field({
      type: CosmicDebriCreateRelationWithoutVortexReport,
      required: false,
    }),
    ghostRecord: t.field({
      type: GhostRecordCreateRelationWithoutVortexReports,
      required: false,
    }),
    hypotheticalRevenue: t.field({
      type: HypotheticalRevenueCreateRelationWithoutVortexReports,
      required: false,
    }),
    realmDirectory: t.field({
      type: RealmDirectoryCreateRelationWithoutVortexReport,
      required: false,
    }),
    reverseTransactions: t.field({
      type: ReverseTransactionCreateRelationListWithoutVortexReport,
      required: false,
    }),
    suspiciousTimestamp: t.field({
      type: SuspiciousTimestampCreateRelationWithoutVortexReport,
      required: false,
    }),
    teleportationFailures: t.field({
      type: TeleportationFailureCreateRelationListWithoutVortexReport,
      required: false,
    }),
    thresholdManifests: t.field({
      type: ThresholdManifestCreateRelationListWithoutVortexReport,
      required: false,
    }),
    timeTravelLog: t.field({
      type: TimeTravelLogCreateRelationWithoutVortexReport,
      required: false,
    }),
    unnecessaryPermission: t.field({
      type: UnnecessaryPermissionCreateRelationWithoutVortexReport,
      required: false,
    }),
    unstableFrequency: t.field({
      type: UnstableFrequencyCreateRelationWithoutVortexReports,
      required: false,
    }),
  }),
});
