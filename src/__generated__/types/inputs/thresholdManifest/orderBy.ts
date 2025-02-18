import { builder } from "src/builder";

import { SortOrder } from "../../../enums/sortOrder";
import { CosmicDebriOrderBy } from "../cosmicDebri/orderBy";
import { HypotheticalRevenueOrderBy } from "../hypotheticalRevenue/orderBy";
import { InfiniteUndoOrderBy } from "../infiniteUndo/orderBy";
import { MetaphysicalReceiptOrderBy } from "../metaphysicalReceipt/orderBy";
import { RealmDirectoryOrderBy } from "../realmDirectory/orderBy";
import { SuspiciousTimestampOrderBy } from "../suspiciousTimestamp/orderBy";
import { TimeTravelLogOrderBy } from "../timeTravelLog/orderBy";
import { UnnecessaryPermissionOrderBy } from "../unnecessaryPermission/orderBy";
import { UnstableFrequencyOrderBy } from "../unstableFrequency/orderBy";
import { VortexReportOrderBy } from "../vortexReport/orderBy";

export const ThresholdManifestOrderBy = builder.inputRef<any>("ThresholdManifestOrderBy").implement({
  fields: (t) => ({
    id: t.field({ type: SortOrder, required: false }),
    createdAt: t.field({ type: SortOrder, required: false }),
    updatedAt: t.field({ type: SortOrder, required: false }),
    cosmicDebris: t.field({ type: CosmicDebriOrderBy, required: false }),
    cosmicDebrisId: t.field({ type: SortOrder, required: false }),
    ghostRecordId: t.field({ type: SortOrder, required: false }),
    hypotheticalRevenue: t.field({ type: HypotheticalRevenueOrderBy, required: false }),
    hypotheticalRevenueId: t.field({ type: SortOrder, required: false }),
    infiniteUndo: t.field({ type: InfiniteUndoOrderBy, required: false }),
    infiniteUndoId: t.field({ type: SortOrder, required: false }),
    metaphysicalReceipt: t.field({ type: MetaphysicalReceiptOrderBy, required: false }),
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
    vortexReport: t.field({ type: VortexReportOrderBy, required: false }),
    vortexReportId: t.field({ type: SortOrder, required: false }),
  }),
});
