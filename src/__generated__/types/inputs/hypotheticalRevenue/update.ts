import { builder } from "src/builder";

import { ConspiracyDraftUpdateRelationListWithoutHypotheticalRevenue } from "../conspiracyDraft/updateRelationListWithoutHypotheticalRevenue";
import { CosmicDebriUpdateRelationWithoutHypotheticalRevenue } from "../cosmicDebri/updateRelationWithoutHypotheticalRevenue";
import { GhostRecordUpdateRelationWithoutHypotheticalRevenues } from "../ghostRecord/updateRelationWithoutHypotheticalRevenues";
import { ImaginaryFriendUpdateRelationListWithoutHypotheticalRevenue } from "../imaginaryFriend/updateRelationListWithoutHypotheticalRevenue";
import { InfiniteUndoUpdateRelationWithoutHypotheticalRevenue } from "../infiniteUndo/updateRelationWithoutHypotheticalRevenue";
import { LostAndNeverFoundUpdateRelationListWithoutHypotheticalRevenue } from "../lostAndNeverFound/updateRelationListWithoutHypotheticalRevenue";
import { RealmDirectoryUpdateRelationWithoutHypotheticalRevenue } from "../realmDirectory/updateRelationWithoutHypotheticalRevenue";
import { SuspiciousTimestampUpdateRelationWithoutHypotheticalRevenue } from "../suspiciousTimestamp/updateRelationWithoutHypotheticalRevenue";
import { ThresholdManifestUpdateRelationListWithoutHypotheticalRevenue } from "../thresholdManifest/updateRelationListWithoutHypotheticalRevenue";
import { TimeTravelLogUpdateRelationWithoutHypotheticalRevenue } from "../timeTravelLog/updateRelationWithoutHypotheticalRevenue";
import { UnnecessaryPermissionUpdateRelationWithoutHypotheticalRevenue } from "../unnecessaryPermission/updateRelationWithoutHypotheticalRevenue";
import { UnstableFrequencyUpdateRelationWithoutHypotheticalRevenuee } from "../unstableFrequency/updateRelationWithoutHypotheticalRevenuee";
import { VortexReportUpdateRelationListWithoutHypotheticalRevenue } from "../vortexReport/updateRelationListWithoutHypotheticalRevenue";

export const HypotheticalRevenueUpdate = builder.inputRef<any>("HypotheticalRevenueUpdate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    conspiracyDrafts: t.field({
      type: ConspiracyDraftUpdateRelationListWithoutHypotheticalRevenue,
      required: false,
    }),
    cosmicDebris: t.field({
      type: CosmicDebriUpdateRelationWithoutHypotheticalRevenue,
      required: false,
    }),
    ghostRecord: t.field({
      type: GhostRecordUpdateRelationWithoutHypotheticalRevenues,
      required: false,
    }),
    imaginaryFriends: t.field({
      type: ImaginaryFriendUpdateRelationListWithoutHypotheticalRevenue,
      required: false,
    }),
    infiniteUndo: t.field({
      type: InfiniteUndoUpdateRelationWithoutHypotheticalRevenue,
      required: false,
    }),
    lostAndNeverFounds: t.field({
      type: LostAndNeverFoundUpdateRelationListWithoutHypotheticalRevenue,
      required: false,
    }),
    realmDirectory: t.field({
      type: RealmDirectoryUpdateRelationWithoutHypotheticalRevenue,
      required: false,
    }),
    suspiciousTimestamp: t.field({
      type: SuspiciousTimestampUpdateRelationWithoutHypotheticalRevenue,
      required: false,
    }),
    thresholdManifests: t.field({
      type: ThresholdManifestUpdateRelationListWithoutHypotheticalRevenue,
      required: false,
    }),
    timeTravelLog: t.field({
      type: TimeTravelLogUpdateRelationWithoutHypotheticalRevenue,
      required: false,
    }),
    unnecessaryPermission: t.field({
      type: UnnecessaryPermissionUpdateRelationWithoutHypotheticalRevenue,
      required: false,
    }),
    unstableFrequency: t.field({
      type: UnstableFrequencyUpdateRelationWithoutHypotheticalRevenuee,
      required: false,
    }),
    vortexReports: t.field({
      type: VortexReportUpdateRelationListWithoutHypotheticalRevenue,
      required: false,
    }),
  }),
});
