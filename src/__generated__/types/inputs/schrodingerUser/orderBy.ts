import { builder } from "src/builder";

import { SortOrder } from "../../../enums/sortOrder";
import { DimensionalBackupOrderBy } from "../dimensionalBackup/orderBy";
import { EchoChamberOrderBy } from "../echoChamber/orderBy";
import { GhostRecordOrderBy } from "../ghostRecord/orderBy";
import { InfiniteScrollLogOrderBy } from "../infiniteScrollLog/orderBy";
import { LostAndNeverFoundOrderBy } from "../lostAndNeverFound/orderBy";
import { SignalGridOrderBy } from "../signalGrid/orderBy";
import { SymphonyChartOrderBy } from "../symphonyChart/orderBy";
import { TeleportationFailureOrderBy } from "../teleportationFailure/orderBy";

export const SchrodingerUserOrderBy = builder.inputRef<any>("SchrodingerUserOrderBy").implement({
  fields: (t) => ({
    id: t.field({ type: SortOrder, required: false }),
    createdAt: t.field({ type: SortOrder, required: false }),
    updatedAt: t.field({ type: SortOrder, required: false }),
    dimensionalBackup: t.field({ type: DimensionalBackupOrderBy, required: false }),
    echoChamber: t.field({ type: EchoChamberOrderBy, required: false }),
    ghostRecord: t.field({ type: GhostRecordOrderBy, required: false }),
    ghostRecordId: t.field({ type: SortOrder, required: false }),
    infiniteScrollLog: t.field({ type: InfiniteScrollLogOrderBy, required: false }),
    lostAndNeverFound: t.field({ type: LostAndNeverFoundOrderBy, required: false }),
    signalGrid: t.field({ type: SignalGridOrderBy, required: false }),
    symphonyChart: t.field({ type: SymphonyChartOrderBy, required: false }),
    teleportationFailure: t.field({ type: TeleportationFailureOrderBy, required: false }),
  }),
});
