import { builder } from "src/builder";

import { SortOrder } from "../../../enums/sortOrder";
import { CosmicDebriOrderBy } from "../cosmicDebri/orderBy";
import { GhostRecordOrderBy } from "../ghostRecord/orderBy";
import { HypotheticalRevenueOrderBy } from "../hypotheticalRevenue/orderBy";
import { InfiniteUndoOrderBy } from "../infiniteUndo/orderBy";
import { RealmDirectoryOrderBy } from "../realmDirectory/orderBy";
import { SuspiciousTimestampOrderBy } from "../suspiciousTimestamp/orderBy";
import { TimeTravelLogOrderBy } from "../timeTravelLog/orderBy";
import { UnnecessaryPermissionOrderBy } from "../unnecessaryPermission/orderBy";
import { UnstableFrequencyOrderBy } from "../unstableFrequency/orderBy";

export const VortexReportOrderBy = builder.inputRef<any>("VortexReportOrderBy").implement({
  fields: (t) => ({
    id: t.field({ type: SortOrder, required: false }),
    createdAt: t.field({ type: SortOrder, required: false }),
    updatedAt: t.field({ type: SortOrder, required: false }),
    cosmicDebris: t.field({ type: CosmicDebriOrderBy, required: false }),
    cosmicDebrisId: t.field({ type: SortOrder, required: false }),
    ghostRecord: t.field({ type: GhostRecordOrderBy, required: false }),
    ghostRecordId: t.field({ type: SortOrder, required: false }),
    hypotheticalRevenue: t.field({ type: HypotheticalRevenueOrderBy, required: false }),
    hypotheticalRevenueId: t.field({ type: SortOrder, required: false }),
    infiniteUndo: t.field({ type: InfiniteUndoOrderBy, required: false }),
    infiniteUndoId: t.field({ type: SortOrder, required: false }),
    realmDirectory: t.field({ type: RealmDirectoryOrderBy, required: false }),
    realmDirectoryId: t.field({ type: SortOrder, required: false }),
    suspiciousTimestamp: t.field({ type: SuspiciousTimestampOrderBy, required: false }),
    suspiciousTimestampId: t.field({ type: SortOrder, required: false }),
    timeTravelLog: t.field({ type: TimeTravelLogOrderBy, required: false }),
    timeTravelLogId: t.field({ type: SortOrder, required: false }),
    unnecessaryPermission: t.field({ type: UnnecessaryPermissionOrderBy, required: false }),
    unnecessaryPermissionId: t.field({ type: SortOrder, required: false }),
    unstableFrequency: t.field({ type: UnstableFrequencyOrderBy, required: false }),
    unstableFrequencyId: t.field({ type: SortOrder, required: false }),
  }),
});
