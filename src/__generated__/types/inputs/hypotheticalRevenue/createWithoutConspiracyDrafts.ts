import { builder } from "src/builder";

import { CosmicDebriCreateRelationWithoutHypotheticalRevenue } from "../cosmicDebri/createRelationWithoutHypotheticalRevenue";
import { GhostRecordCreateRelationWithoutHypotheticalRevenues } from "../ghostRecord/createRelationWithoutHypotheticalRevenues";
import { ImaginaryFriendCreateRelationListWithoutHypotheticalRevenue } from "../imaginaryFriend/createRelationListWithoutHypotheticalRevenue";
import { InfiniteUndoCreateRelationWithoutHypotheticalRevenue } from "../infiniteUndo/createRelationWithoutHypotheticalRevenue";
import { LostAndNeverFoundCreateRelationListWithoutHypotheticalRevenue } from "../lostAndNeverFound/createRelationListWithoutHypotheticalRevenue";
import { RealmDirectoryCreateRelationWithoutHypotheticalRevenue } from "../realmDirectory/createRelationWithoutHypotheticalRevenue";
import { SuspiciousTimestampCreateRelationWithoutHypotheticalRevenue } from "../suspiciousTimestamp/createRelationWithoutHypotheticalRevenue";
import { ThresholdManifestCreateRelationListWithoutHypotheticalRevenue } from "../thresholdManifest/createRelationListWithoutHypotheticalRevenue";
import { TimeTravelLogCreateRelationWithoutHypotheticalRevenue } from "../timeTravelLog/createRelationWithoutHypotheticalRevenue";
import { UnnecessaryPermissionCreateRelationWithoutHypotheticalRevenue } from "../unnecessaryPermission/createRelationWithoutHypotheticalRevenue";
import { UnstableFrequencyCreateRelationWithoutHypotheticalRevenuee } from "../unstableFrequency/createRelationWithoutHypotheticalRevenuee";
import { VortexReportCreateRelationListWithoutHypotheticalRevenue } from "../vortexReport/createRelationListWithoutHypotheticalRevenue";

export const HypotheticalRevenueCreateWithoutConspiracyDrafts = builder.inputRef<any>("HypotheticalRevenueCreateWithoutConspiracyDrafts").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    cosmicDebris: t.field({
      type: CosmicDebriCreateRelationWithoutHypotheticalRevenue,
      required: false,
    }),
    ghostRecord: t.field({
      type: GhostRecordCreateRelationWithoutHypotheticalRevenues,
      required: false,
    }),
    imaginaryFriends: t.field({
      type: ImaginaryFriendCreateRelationListWithoutHypotheticalRevenue,
      required: false,
    }),
    infiniteUndo: t.field({
      type: InfiniteUndoCreateRelationWithoutHypotheticalRevenue,
      required: false,
    }),
    lostAndNeverFounds: t.field({
      type: LostAndNeverFoundCreateRelationListWithoutHypotheticalRevenue,
      required: false,
    }),
    realmDirectory: t.field({
      type: RealmDirectoryCreateRelationWithoutHypotheticalRevenue,
      required: false,
    }),
    suspiciousTimestamp: t.field({
      type: SuspiciousTimestampCreateRelationWithoutHypotheticalRevenue,
      required: false,
    }),
    thresholdManifests: t.field({
      type: ThresholdManifestCreateRelationListWithoutHypotheticalRevenue,
      required: false,
    }),
    timeTravelLog: t.field({
      type: TimeTravelLogCreateRelationWithoutHypotheticalRevenue,
      required: false,
    }),
    unnecessaryPermission: t.field({
      type: UnnecessaryPermissionCreateRelationWithoutHypotheticalRevenue,
      required: false,
    }),
    unstableFrequency: t.field({
      type: UnstableFrequencyCreateRelationWithoutHypotheticalRevenuee,
      required: false,
    }),
    vortexReports: t.field({
      type: VortexReportCreateRelationListWithoutHypotheticalRevenue,
      required: false,
    }),
  }),
});
