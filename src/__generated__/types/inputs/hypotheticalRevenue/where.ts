import { builder } from "src/builder";

import { ConspiracyDraftWhereRelationList } from "../conspiracyDraft/whereRelationList";
import { CosmicDebriWhere } from "../cosmicDebri/where";
import { DateTimeFilter } from "../dateTimeFilter";
import { GhostRecordWhere } from "../ghostRecord/where";
import { IdFilter } from "../idFilter";
import { ImaginaryFriendWhereRelationList } from "../imaginaryFriend/whereRelationList";
import { InfiniteUndoWhere } from "../infiniteUndo/where";
import { LostAndNeverFoundWhereRelationList } from "../lostAndNeverFound/whereRelationList";
import { RealmDirectoryWhere } from "../realmDirectory/where";
import { SuspiciousTimestampWhere } from "../suspiciousTimestamp/where";
import { ThresholdManifestWhereRelationList } from "../thresholdManifest/whereRelationList";
import { TimeTravelLogWhere } from "../timeTravelLog/where";
import { UnnecessaryPermissionWhere } from "../unnecessaryPermission/where";
import { UnstableFrequencyWhere } from "../unstableFrequency/where";
import { VortexReportWhereRelationList } from "../vortexReport/whereRelationList";

export const HypotheticalRevenueWhere = builder.inputRef<any>("HypotheticalRevenueWhere").implement({
  fields: (t) => ({
    id: t.field({ type: IdFilter, required: false }),
    createdAt: t.field({ type: DateTimeFilter, required: false }),
    updatedAt: t.field({ type: DateTimeFilter, required: false }),
    conspiracyDrafts: t.field({ type: ConspiracyDraftWhereRelationList, required: false }),
    cosmicDebris: t.field({ type: CosmicDebriWhere, required: false }),
    cosmicDebrisId: t.field({ type: IdFilter, required: false }),
    ghostRecord: t.field({ type: GhostRecordWhere, required: false }),
    ghostRecordId: t.field({ type: IdFilter, required: false }),
    imaginaryFriends: t.field({ type: ImaginaryFriendWhereRelationList, required: false }),
    infiniteUndo: t.field({ type: InfiniteUndoWhere, required: false }),
    infiniteUndoId: t.field({ type: IdFilter, required: false }),
    lostAndNeverFounds: t.field({ type: LostAndNeverFoundWhereRelationList, required: false }),
    realmDirectory: t.field({ type: RealmDirectoryWhere, required: false }),
    realmDirectoryId: t.field({ type: IdFilter, required: false }),
    suspiciousTimestamp: t.field({ type: SuspiciousTimestampWhere, required: false }),
    suspiciousTimestampId: t.field({ type: IdFilter, required: false }),
    thresholdManifests: t.field({ type: ThresholdManifestWhereRelationList, required: false }),
    timeTravelLog: t.field({ type: TimeTravelLogWhere, required: false }),
    timeTravelLogId: t.field({ type: IdFilter, required: false }),
    unnecessaryPermission: t.field({ type: UnnecessaryPermissionWhere, required: false }),
    unnecessaryPermissionId: t.field({ type: IdFilter, required: false }),
    unstableFrequency: t.field({ type: UnstableFrequencyWhere, required: false }),
    unstableFrequencyId: t.field({ type: IdFilter, required: false }),
    vortexReports: t.field({ type: VortexReportWhereRelationList, required: false }),
    AND: t.field({ type: [HypotheticalRevenueWhere], required: false }),
    OR: t.field({ type: [HypotheticalRevenueWhere], required: false }),
    NOT: t.field({ type: [HypotheticalRevenueWhere], required: false }),
  }),
});
