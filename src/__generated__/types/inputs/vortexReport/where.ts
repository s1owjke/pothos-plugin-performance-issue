import { builder } from "src/builder";

import { ConspiracyDraftWhereRelationList } from "../conspiracyDraft/whereRelationList";
import { CosmicDebriWhere } from "../cosmicDebri/where";
import { DateTimeFilter } from "../dateTimeFilter";
import { GhostRecordWhere } from "../ghostRecord/where";
import { HypotheticalRevenueWhere } from "../hypotheticalRevenue/where";
import { IdFilter } from "../idFilter";
import { InfiniteUndoWhere } from "../infiniteUndo/where";
import { RealmDirectoryWhere } from "../realmDirectory/where";
import { ReverseTransactionWhereRelationList } from "../reverseTransaction/whereRelationList";
import { SuspiciousTimestampWhere } from "../suspiciousTimestamp/where";
import { TeleportationFailureWhereRelationList } from "../teleportationFailure/whereRelationList";
import { ThresholdManifestWhereRelationList } from "../thresholdManifest/whereRelationList";
import { TimeTravelLogWhere } from "../timeTravelLog/where";
import { UnnecessaryPermissionWhere } from "../unnecessaryPermission/where";
import { UnstableFrequencyWhere } from "../unstableFrequency/where";

export const VortexReportWhere = builder.inputRef<any>("VortexReportWhere").implement({
  fields: (t) => ({
    id: t.field({ type: IdFilter, required: false }),
    createdAt: t.field({ type: DateTimeFilter, required: false }),
    updatedAt: t.field({ type: DateTimeFilter, required: false }),
    conspiracyDrafts: t.field({ type: ConspiracyDraftWhereRelationList, required: false }),
    cosmicDebris: t.field({ type: CosmicDebriWhere, required: false }),
    cosmicDebrisId: t.field({ type: IdFilter, required: false }),
    ghostRecord: t.field({ type: GhostRecordWhere, required: false }),
    ghostRecordId: t.field({ type: IdFilter, required: false }),
    hypotheticalRevenue: t.field({ type: HypotheticalRevenueWhere, required: false }),
    hypotheticalRevenueId: t.field({ type: IdFilter, required: false }),
    infiniteUndo: t.field({ type: InfiniteUndoWhere, required: false }),
    infiniteUndoId: t.field({ type: IdFilter, required: false }),
    realmDirectory: t.field({ type: RealmDirectoryWhere, required: false }),
    realmDirectoryId: t.field({ type: IdFilter, required: false }),
    reverseTransactions: t.field({ type: ReverseTransactionWhereRelationList, required: false }),
    suspiciousTimestamp: t.field({ type: SuspiciousTimestampWhere, required: false }),
    suspiciousTimestampId: t.field({ type: IdFilter, required: false }),
    teleportationFailures: t.field({
      type: TeleportationFailureWhereRelationList,
      required: false,
    }),
    thresholdManifests: t.field({ type: ThresholdManifestWhereRelationList, required: false }),
    timeTravelLog: t.field({ type: TimeTravelLogWhere, required: false }),
    timeTravelLogId: t.field({ type: IdFilter, required: false }),
    unnecessaryPermission: t.field({ type: UnnecessaryPermissionWhere, required: false }),
    unnecessaryPermissionId: t.field({ type: IdFilter, required: false }),
    unstableFrequency: t.field({ type: UnstableFrequencyWhere, required: false }),
    unstableFrequencyId: t.field({ type: IdFilter, required: false }),
    AND: t.field({ type: [VortexReportWhere], required: false }),
    OR: t.field({ type: [VortexReportWhere], required: false }),
    NOT: t.field({ type: [VortexReportWhere], required: false }),
  }),
});
