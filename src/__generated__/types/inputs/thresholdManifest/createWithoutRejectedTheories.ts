import { builder } from "src/builder";

import { ClassifiedSillinessCreateRelationListWithoutThresholdManifest } from "../classifiedSilliness/createRelationListWithoutThresholdManifest";
import { ConspiracyDraftCreateRelationListWithoutThresholdManifest } from "../conspiracyDraft/createRelationListWithoutThresholdManifest";
import { CosmicDebriCreateRelationWithoutThresholdManifest } from "../cosmicDebri/createRelationWithoutThresholdManifest";
import { DimensionalBackupCreateRelationListWithoutThresholdManifest } from "../dimensionalBackup/createRelationListWithoutThresholdManifest";
import { ForbiddenCheeseburgerCreateRelationListWithoutThresholdManifest } from "../forbiddenCheeseburger/createRelationListWithoutThresholdManifest";
import { GhostRecordCreateRelationListWithoutThresholdManifest } from "../ghostRecord/createRelationListWithoutThresholdManifest";
import { GlitchRegistryCreateRelationListWithoutThresholdManifests } from "../glitchRegistry/createRelationListWithoutThresholdManifests";
import { GloriousMistakeCreateRelationListWithoutThresholdManifest } from "../gloriousMistake/createRelationListWithoutThresholdManifest";
import { GravityOverrideCreateRelationListWithoutThresholdManifest } from "../gravityOverride/createRelationListWithoutThresholdManifest";
import { HalfBakedIdeaCreateRelationListWithoutThresholdManifest } from "../halfBakedIdea/createRelationListWithoutThresholdManifest";
import { HypotheticalRevenueCreateRelationWithoutThresholdManifests } from "../hypotheticalRevenue/createRelationWithoutThresholdManifests";
import { InfiniteScrollLogCreateRelationListWithoutThresholdManifest } from "../infiniteScrollLog/createRelationListWithoutThresholdManifest";
import { InfiniteUndoCreateRelationWithoutThresholdManifest } from "../infiniteUndo/createRelationWithoutThresholdManifest";
import { MetaphysicalReceiptCreateRelationWithoutThresholdManifest } from "../metaphysicalReceipt/createRelationWithoutThresholdManifest";
import { PendingDisasterCreateRelationListWithoutThresholdManifest } from "../pendingDisaster/createRelationListWithoutThresholdManifest";
import { RealmDirectoryCreateRelationWithoutThresholdManifest } from "../realmDirectory/createRelationWithoutThresholdManifest";
import { StaticWhisperCreateRelationListWithoutThresholdManifest } from "../staticWhisper/createRelationListWithoutThresholdManifest";
import { SuspiciousTimestampCreateRelationWithoutThresholdManifest } from "../suspiciousTimestamp/createRelationWithoutThresholdManifest";
import { TeleportationFailureCreateRelationListWithoutThresholdManifests } from "../teleportationFailure/createRelationListWithoutThresholdManifests";
import { TimeTravelLogCreateRelationWithoutThresholdManifest } from "../timeTravelLog/createRelationWithoutThresholdManifest";
import { UnnecessaryPermissionCreateRelationWithoutThresholdManifest } from "../unnecessaryPermission/createRelationWithoutThresholdManifest";
import { UnstableFrequencyCreateRelationWithoutThresholdManifests } from "../unstableFrequency/createRelationWithoutThresholdManifests";
import { VortexReportCreateRelationWithoutThresholdManifests } from "../vortexReport/createRelationWithoutThresholdManifests";

export const ThresholdManifestCreateWithoutRejectedTheories = builder.inputRef<any>("ThresholdManifestCreateWithoutRejectedTheories").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    classifiedSillinesses: t.field({
      type: ClassifiedSillinessCreateRelationListWithoutThresholdManifest,
      required: false,
    }),
    conspiracyDrafts: t.field({
      type: ConspiracyDraftCreateRelationListWithoutThresholdManifest,
      required: false,
    }),
    cosmicDebris: t.field({
      type: CosmicDebriCreateRelationWithoutThresholdManifest,
      required: false,
    }),
    dimensionalBackups: t.field({
      type: DimensionalBackupCreateRelationListWithoutThresholdManifest,
      required: false,
    }),
    forbiddenCheeseburgers: t.field({
      type: ForbiddenCheeseburgerCreateRelationListWithoutThresholdManifest,
      required: false,
    }),
    ghostRecordId: t.field({ type: "String", required: false }),
    ghostRecords: t.field({
      type: GhostRecordCreateRelationListWithoutThresholdManifest,
      required: false,
    }),
    glitchRegisties: t.field({
      type: GlitchRegistryCreateRelationListWithoutThresholdManifests,
      required: false,
    }),
    gloriousMistakes: t.field({
      type: GloriousMistakeCreateRelationListWithoutThresholdManifest,
      required: false,
    }),
    gravityOverrides: t.field({
      type: GravityOverrideCreateRelationListWithoutThresholdManifest,
      required: false,
    }),
    halfBakedIdeas: t.field({
      type: HalfBakedIdeaCreateRelationListWithoutThresholdManifest,
      required: false,
    }),
    hypotheticalRevenue: t.field({
      type: HypotheticalRevenueCreateRelationWithoutThresholdManifests,
      required: false,
    }),
    infiniteScrollLog: t.field({
      type: InfiniteScrollLogCreateRelationListWithoutThresholdManifest,
      required: false,
    }),
    infiniteUndo: t.field({
      type: InfiniteUndoCreateRelationWithoutThresholdManifest,
      required: false,
    }),
    metaphysicalReceipt: t.field({
      type: MetaphysicalReceiptCreateRelationWithoutThresholdManifest,
      required: false,
    }),
    pendingDisasters: t.field({
      type: PendingDisasterCreateRelationListWithoutThresholdManifest,
      required: false,
    }),
    realmDirectory: t.field({
      type: RealmDirectoryCreateRelationWithoutThresholdManifest,
      required: false,
    }),
    staticWhispers: t.field({
      type: StaticWhisperCreateRelationListWithoutThresholdManifest,
      required: false,
    }),
    suspiciousTimestamp: t.field({
      type: SuspiciousTimestampCreateRelationWithoutThresholdManifest,
      required: false,
    }),
    teleportationFailures: t.field({
      type: TeleportationFailureCreateRelationListWithoutThresholdManifests,
      required: false,
    }),
    timeTravelLog: t.field({
      type: TimeTravelLogCreateRelationWithoutThresholdManifest,
      required: false,
    }),
    unnecessaryPermission: t.field({
      type: UnnecessaryPermissionCreateRelationWithoutThresholdManifest,
      required: false,
    }),
    unstableFrequency: t.field({
      type: UnstableFrequencyCreateRelationWithoutThresholdManifests,
      required: false,
    }),
    vortexReport: t.field({
      type: VortexReportCreateRelationWithoutThresholdManifests,
      required: false,
    }),
  }),
});
