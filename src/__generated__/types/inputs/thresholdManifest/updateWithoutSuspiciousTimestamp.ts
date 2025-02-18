import { builder } from "src/builder";

import { ClassifiedSillinessUpdateRelationListWithoutThresholdManifest } from "../classifiedSilliness/updateRelationListWithoutThresholdManifest";
import { ConspiracyDraftUpdateRelationListWithoutThresholdManifest } from "../conspiracyDraft/updateRelationListWithoutThresholdManifest";
import { CosmicDebriUpdateRelationWithoutThresholdManifest } from "../cosmicDebri/updateRelationWithoutThresholdManifest";
import { DimensionalBackupUpdateRelationListWithoutThresholdManifest } from "../dimensionalBackup/updateRelationListWithoutThresholdManifest";
import { ForbiddenCheeseburgerUpdateRelationListWithoutThresholdManifest } from "../forbiddenCheeseburger/updateRelationListWithoutThresholdManifest";
import { GhostRecordUpdateRelationListWithoutThresholdManifest } from "../ghostRecord/updateRelationListWithoutThresholdManifest";
import { GlitchRegistryUpdateRelationListWithoutThresholdManifests } from "../glitchRegistry/updateRelationListWithoutThresholdManifests";
import { GloriousMistakeUpdateRelationListWithoutThresholdManifest } from "../gloriousMistake/updateRelationListWithoutThresholdManifest";
import { GravityOverrideUpdateRelationListWithoutThresholdManifest } from "../gravityOverride/updateRelationListWithoutThresholdManifest";
import { HalfBakedIdeaUpdateRelationListWithoutThresholdManifest } from "../halfBakedIdea/updateRelationListWithoutThresholdManifest";
import { HypotheticalRevenueUpdateRelationWithoutThresholdManifests } from "../hypotheticalRevenue/updateRelationWithoutThresholdManifests";
import { InfiniteScrollLogUpdateRelationListWithoutThresholdManifest } from "../infiniteScrollLog/updateRelationListWithoutThresholdManifest";
import { InfiniteUndoUpdateRelationWithoutThresholdManifest } from "../infiniteUndo/updateRelationWithoutThresholdManifest";
import { MetaphysicalReceiptUpdateRelationWithoutThresholdManifest } from "../metaphysicalReceipt/updateRelationWithoutThresholdManifest";
import { PendingDisasterUpdateRelationListWithoutThresholdManifest } from "../pendingDisaster/updateRelationListWithoutThresholdManifest";
import { RealmDirectoryUpdateRelationWithoutThresholdManifest } from "../realmDirectory/updateRelationWithoutThresholdManifest";
import { RejectedTheoryUpdateRelationListWithoutThresholdManifest } from "../rejectedTheory/updateRelationListWithoutThresholdManifest";
import { StaticWhisperUpdateRelationListWithoutThresholdManifest } from "../staticWhisper/updateRelationListWithoutThresholdManifest";
import { TeleportationFailureUpdateRelationListWithoutThresholdManifests } from "../teleportationFailure/updateRelationListWithoutThresholdManifests";
import { TimeTravelLogUpdateRelationWithoutThresholdManifest } from "../timeTravelLog/updateRelationWithoutThresholdManifest";
import { UnnecessaryPermissionUpdateRelationWithoutThresholdManifest } from "../unnecessaryPermission/updateRelationWithoutThresholdManifest";
import { UnstableFrequencyUpdateRelationWithoutThresholdManifests } from "../unstableFrequency/updateRelationWithoutThresholdManifests";
import { VortexReportUpdateRelationWithoutThresholdManifests } from "../vortexReport/updateRelationWithoutThresholdManifests";

export const ThresholdManifestUpdateWithoutSuspiciousTimestamp = builder
  .inputRef<any>("ThresholdManifestUpdateWithoutSuspiciousTimestamp")
  .implement({
    fields: (t) => ({
      createdAt: t.field({ type: "DateTime", required: false }),
      updatedAt: t.field({ type: "DateTime", required: false }),
      classifiedSillinesses: t.field({
        type: ClassifiedSillinessUpdateRelationListWithoutThresholdManifest,
        required: false,
      }),
      conspiracyDrafts: t.field({
        type: ConspiracyDraftUpdateRelationListWithoutThresholdManifest,
        required: false,
      }),
      cosmicDebris: t.field({
        type: CosmicDebriUpdateRelationWithoutThresholdManifest,
        required: false,
      }),
      dimensionalBackups: t.field({
        type: DimensionalBackupUpdateRelationListWithoutThresholdManifest,
        required: false,
      }),
      forbiddenCheeseburgers: t.field({
        type: ForbiddenCheeseburgerUpdateRelationListWithoutThresholdManifest,
        required: false,
      }),
      ghostRecordId: t.field({ type: "String", required: false }),
      ghostRecords: t.field({
        type: GhostRecordUpdateRelationListWithoutThresholdManifest,
        required: false,
      }),
      glitchRegisties: t.field({
        type: GlitchRegistryUpdateRelationListWithoutThresholdManifests,
        required: false,
      }),
      gloriousMistakes: t.field({
        type: GloriousMistakeUpdateRelationListWithoutThresholdManifest,
        required: false,
      }),
      gravityOverrides: t.field({
        type: GravityOverrideUpdateRelationListWithoutThresholdManifest,
        required: false,
      }),
      halfBakedIdeas: t.field({
        type: HalfBakedIdeaUpdateRelationListWithoutThresholdManifest,
        required: false,
      }),
      hypotheticalRevenue: t.field({
        type: HypotheticalRevenueUpdateRelationWithoutThresholdManifests,
        required: false,
      }),
      infiniteScrollLog: t.field({
        type: InfiniteScrollLogUpdateRelationListWithoutThresholdManifest,
        required: false,
      }),
      infiniteUndo: t.field({
        type: InfiniteUndoUpdateRelationWithoutThresholdManifest,
        required: false,
      }),
      metaphysicalReceipt: t.field({
        type: MetaphysicalReceiptUpdateRelationWithoutThresholdManifest,
        required: false,
      }),
      pendingDisasters: t.field({
        type: PendingDisasterUpdateRelationListWithoutThresholdManifest,
        required: false,
      }),
      realmDirectory: t.field({
        type: RealmDirectoryUpdateRelationWithoutThresholdManifest,
        required: false,
      }),
      rejectedTheories: t.field({
        type: RejectedTheoryUpdateRelationListWithoutThresholdManifest,
        required: false,
      }),
      staticWhispers: t.field({
        type: StaticWhisperUpdateRelationListWithoutThresholdManifest,
        required: false,
      }),
      teleportationFailures: t.field({
        type: TeleportationFailureUpdateRelationListWithoutThresholdManifests,
        required: false,
      }),
      timeTravelLog: t.field({
        type: TimeTravelLogUpdateRelationWithoutThresholdManifest,
        required: false,
      }),
      unnecessaryPermission: t.field({
        type: UnnecessaryPermissionUpdateRelationWithoutThresholdManifest,
        required: false,
      }),
      unstableFrequency: t.field({
        type: UnstableFrequencyUpdateRelationWithoutThresholdManifests,
        required: false,
      }),
      vortexReport: t.field({
        type: VortexReportUpdateRelationWithoutThresholdManifests,
        required: false,
      }),
    }),
  });
