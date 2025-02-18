import { builder } from "src/builder";

import { ConspiracyDraftCreateRelationListWithoutVortexReport } from "../conspiracyDraft/createRelationListWithoutVortexReport";
import { CosmicDebriCreateRelationWithoutVortexReport } from "../cosmicDebri/createRelationWithoutVortexReport";
import { GhostRecordCreateRelationWithoutVortexReports } from "../ghostRecord/createRelationWithoutVortexReports";
import { HypotheticalRevenueCreateRelationWithoutVortexReports } from "../hypotheticalRevenue/createRelationWithoutVortexReports";
import { InfiniteUndoCreateRelationWithoutVortexReport } from "../infiniteUndo/createRelationWithoutVortexReport";
import { RealmDirectoryCreateRelationWithoutVortexReport } from "../realmDirectory/createRelationWithoutVortexReport";
import { ReverseTransactionCreateRelationListWithoutVortexReport } from "../reverseTransaction/createRelationListWithoutVortexReport";
import { SuspiciousTimestampCreateRelationWithoutVortexReport } from "../suspiciousTimestamp/createRelationWithoutVortexReport";
import { TeleportationFailureCreateRelationListWithoutVortexReport } from "../teleportationFailure/createRelationListWithoutVortexReport";
import { ThresholdManifestCreateRelationListWithoutVortexReport } from "../thresholdManifest/createRelationListWithoutVortexReport";
import { TimeTravelLogCreateRelationWithoutVortexReport } from "../timeTravelLog/createRelationWithoutVortexReport";
import { UnstableFrequencyCreateRelationWithoutVortexReports } from "../unstableFrequency/createRelationWithoutVortexReports";

export const VortexReportCreateWithoutUnnecessaryPermission = builder.inputRef<any>("VortexReportCreateWithoutUnnecessaryPermission").implement({
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
    infiniteUndo: t.field({
      type: InfiniteUndoCreateRelationWithoutVortexReport,
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
    unstableFrequency: t.field({
      type: UnstableFrequencyCreateRelationWithoutVortexReports,
      required: false,
    }),
  }),
});
