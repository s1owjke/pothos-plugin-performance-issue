import { builder } from "src/builder";

import { ClassifiedSillinessWhereRelationList } from "../classifiedSilliness/whereRelationList";
import { ConspiracyDraftWhereRelationList } from "../conspiracyDraft/whereRelationList";
import { CosmicDebriWhere } from "../cosmicDebri/where";
import { DateTimeFilter } from "../dateTimeFilter";
import { DimensionalBackupWhereRelationList } from "../dimensionalBackup/whereRelationList";
import { ForbiddenCheeseburgerWhereRelationList } from "../forbiddenCheeseburger/whereRelationList";
import { GhostRecordWhereRelationList } from "../ghostRecord/whereRelationList";
import { GlitchRegistryWhereRelationList } from "../glitchRegistry/whereRelationList";
import { GloriousMistakeWhereRelationList } from "../gloriousMistake/whereRelationList";
import { GravityOverrideWhereRelationList } from "../gravityOverride/whereRelationList";
import { HalfBakedIdeaWhereRelationList } from "../halfBakedIdea/whereRelationList";
import { HypotheticalRevenueWhere } from "../hypotheticalRevenue/where";
import { IdFilter } from "../idFilter";
import { InfiniteScrollLogWhereRelationList } from "../infiniteScrollLog/whereRelationList";
import { InfiniteUndoWhere } from "../infiniteUndo/where";
import { MetaphysicalReceiptWhere } from "../metaphysicalReceipt/where";
import { PendingDisasterWhereRelationList } from "../pendingDisaster/whereRelationList";
import { RealmDirectoryWhere } from "../realmDirectory/where";
import { RejectedTheoryWhereRelationList } from "../rejectedTheory/whereRelationList";
import { StaticWhisperWhereRelationList } from "../staticWhisper/whereRelationList";
import { StringFilter } from "../stringFilter";
import { SuspiciousTimestampWhere } from "../suspiciousTimestamp/where";
import { TeleportationFailureWhereRelationList } from "../teleportationFailure/whereRelationList";
import { TimeTravelLogWhere } from "../timeTravelLog/where";
import { UnnecessaryPermissionWhere } from "../unnecessaryPermission/where";
import { UnstableFrequencyWhere } from "../unstableFrequency/where";
import { VortexReportWhere } from "../vortexReport/where";

export const ThresholdManifestWhere = builder.inputRef<any>("ThresholdManifestWhere").implement({
  fields: (t) => ({
    id: t.field({ type: IdFilter, required: false }),
    createdAt: t.field({ type: DateTimeFilter, required: false }),
    updatedAt: t.field({ type: DateTimeFilter, required: false }),
    classifiedSillinesses: t.field({ type: ClassifiedSillinessWhereRelationList, required: false }),
    conspiracyDrafts: t.field({ type: ConspiracyDraftWhereRelationList, required: false }),
    cosmicDebris: t.field({ type: CosmicDebriWhere, required: false }),
    cosmicDebrisId: t.field({ type: IdFilter, required: false }),
    dimensionalBackups: t.field({ type: DimensionalBackupWhereRelationList, required: false }),
    forbiddenCheeseburgers: t.field({
      type: ForbiddenCheeseburgerWhereRelationList,
      required: false,
    }),
    ghostRecordId: t.field({ type: StringFilter, required: false }),
    ghostRecords: t.field({ type: GhostRecordWhereRelationList, required: false }),
    glitchRegisties: t.field({ type: GlitchRegistryWhereRelationList, required: false }),
    gloriousMistakes: t.field({ type: GloriousMistakeWhereRelationList, required: false }),
    gravityOverrides: t.field({ type: GravityOverrideWhereRelationList, required: false }),
    halfBakedIdeas: t.field({ type: HalfBakedIdeaWhereRelationList, required: false }),
    hypotheticalRevenue: t.field({ type: HypotheticalRevenueWhere, required: false }),
    hypotheticalRevenueId: t.field({ type: IdFilter, required: false }),
    infiniteScrollLog: t.field({ type: InfiniteScrollLogWhereRelationList, required: false }),
    infiniteUndo: t.field({ type: InfiniteUndoWhere, required: false }),
    infiniteUndoId: t.field({ type: IdFilter, required: false }),
    metaphysicalReceipt: t.field({ type: MetaphysicalReceiptWhere, required: false }),
    pendingDisasters: t.field({ type: PendingDisasterWhereRelationList, required: false }),
    realmDirectory: t.field({ type: RealmDirectoryWhere, required: false }),
    realmDirectoryId: t.field({ type: IdFilter, required: false }),
    rejectedTheories: t.field({ type: RejectedTheoryWhereRelationList, required: false }),
    staticWhispers: t.field({ type: StaticWhisperWhereRelationList, required: false }),
    suspiciousTimestamp: t.field({ type: SuspiciousTimestampWhere, required: false }),
    suspiciousTimestampId: t.field({ type: IdFilter, required: false }),
    teleportationFailures: t.field({
      type: TeleportationFailureWhereRelationList,
      required: false,
    }),
    timeTravelLog: t.field({ type: TimeTravelLogWhere, required: false }),
    timeTravelLogId: t.field({ type: IdFilter, required: false }),
    unnecessaryPermission: t.field({ type: UnnecessaryPermissionWhere, required: false }),
    unnecessaryPermissionId: t.field({ type: IdFilter, required: false }),
    unstableFrequency: t.field({ type: UnstableFrequencyWhere, required: false }),
    unstableFrequencyId: t.field({ type: IdFilter, required: false }),
    vortexReport: t.field({ type: VortexReportWhere, required: false }),
    vortexReportId: t.field({ type: IdFilter, required: false }),
    AND: t.field({ type: [ThresholdManifestWhere], required: false }),
    OR: t.field({ type: [ThresholdManifestWhere], required: false }),
    NOT: t.field({ type: [ThresholdManifestWhere], required: false }),
  }),
});
