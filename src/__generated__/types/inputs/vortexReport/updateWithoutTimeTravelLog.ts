import { builder } from "src/builder";

import { ConspiracyDraftUpdateRelationListWithoutVortexReport } from "../conspiracyDraft/updateRelationListWithoutVortexReport";
import { CosmicDebriUpdateRelationWithoutVortexReport } from "../cosmicDebri/updateRelationWithoutVortexReport";
import { GhostRecordUpdateRelationWithoutVortexReports } from "../ghostRecord/updateRelationWithoutVortexReports";
import { HypotheticalRevenueUpdateRelationWithoutVortexReports } from "../hypotheticalRevenue/updateRelationWithoutVortexReports";
import { InfiniteUndoUpdateRelationWithoutVortexReport } from "../infiniteUndo/updateRelationWithoutVortexReport";
import { RealmDirectoryUpdateRelationWithoutVortexReport } from "../realmDirectory/updateRelationWithoutVortexReport";
import { ReverseTransactionUpdateRelationListWithoutVortexReport } from "../reverseTransaction/updateRelationListWithoutVortexReport";
import { SuspiciousTimestampUpdateRelationWithoutVortexReport } from "../suspiciousTimestamp/updateRelationWithoutVortexReport";
import { TeleportationFailureUpdateRelationListWithoutVortexReport } from "../teleportationFailure/updateRelationListWithoutVortexReport";
import { ThresholdManifestUpdateRelationListWithoutVortexReport } from "../thresholdManifest/updateRelationListWithoutVortexReport";
import { UnnecessaryPermissionUpdateRelationWithoutVortexReport } from "../unnecessaryPermission/updateRelationWithoutVortexReport";
import { UnstableFrequencyUpdateRelationWithoutVortexReports } from "../unstableFrequency/updateRelationWithoutVortexReports";

export const VortexReportUpdateWithoutTimeTravelLog = builder.inputRef<any>("VortexReportUpdateWithoutTimeTravelLog").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    conspiracyDrafts: t.field({
      type: ConspiracyDraftUpdateRelationListWithoutVortexReport,
      required: false,
    }),
    cosmicDebris: t.field({
      type: CosmicDebriUpdateRelationWithoutVortexReport,
      required: false,
    }),
    ghostRecord: t.field({
      type: GhostRecordUpdateRelationWithoutVortexReports,
      required: false,
    }),
    hypotheticalRevenue: t.field({
      type: HypotheticalRevenueUpdateRelationWithoutVortexReports,
      required: false,
    }),
    infiniteUndo: t.field({
      type: InfiniteUndoUpdateRelationWithoutVortexReport,
      required: false,
    }),
    realmDirectory: t.field({
      type: RealmDirectoryUpdateRelationWithoutVortexReport,
      required: false,
    }),
    reverseTransactions: t.field({
      type: ReverseTransactionUpdateRelationListWithoutVortexReport,
      required: false,
    }),
    suspiciousTimestamp: t.field({
      type: SuspiciousTimestampUpdateRelationWithoutVortexReport,
      required: false,
    }),
    teleportationFailures: t.field({
      type: TeleportationFailureUpdateRelationListWithoutVortexReport,
      required: false,
    }),
    thresholdManifests: t.field({
      type: ThresholdManifestUpdateRelationListWithoutVortexReport,
      required: false,
    }),
    unnecessaryPermission: t.field({
      type: UnnecessaryPermissionUpdateRelationWithoutVortexReport,
      required: false,
    }),
    unstableFrequency: t.field({
      type: UnstableFrequencyUpdateRelationWithoutVortexReports,
      required: false,
    }),
  }),
});
