import { builder } from "src/builder";

import { DateTimeFilter } from "../dateTimeFilter";
import { DimensionalBackupWhere } from "../dimensionalBackup/where";
import { EchoChamberWhere } from "../echoChamber/where";
import { GhostRecordWhere } from "../ghostRecord/where";
import { GravityOverrideWhereRelationList } from "../gravityOverride/whereRelationList";
import { IdFilter } from "../idFilter";
import { ImaginaryFriendWhereRelationList } from "../imaginaryFriend/whereRelationList";
import { InfiniteScrollLogWhere } from "../infiniteScrollLog/where";
import { InterdimensionalReceiptWhereRelationList } from "../interdimensionalReceipt/whereRelationList";
import { LostAndNeverFoundWhere } from "../lostAndNeverFound/where";
import { ReverseTransactionWhereRelationList } from "../reverseTransaction/whereRelationList";
import { SignalGridWhere } from "../signalGrid/where";
import { SymphonyChartWhere } from "../symphonyChart/where";
import { TeleportationFailureWhere } from "../teleportationFailure/where";
import { ThoughtCacheWhereRelationList } from "../thoughtCache/whereRelationList";

export const SchrodingerUserWhere = builder.inputRef<any>("SchrodingerUserWhere").implement({
  fields: (t) => ({
    id: t.field({ type: IdFilter, required: false }),
    createdAt: t.field({ type: DateTimeFilter, required: false }),
    updatedAt: t.field({ type: DateTimeFilter, required: false }),
    dimensionalBackup: t.field({ type: DimensionalBackupWhere, required: false }),
    echoChamber: t.field({ type: EchoChamberWhere, required: false }),
    ghostRecord: t.field({ type: GhostRecordWhere, required: false }),
    ghostRecordId: t.field({ type: IdFilter, required: false }),
    gravityOverrides: t.field({ type: GravityOverrideWhereRelationList, required: false }),
    imaginaryFriends: t.field({ type: ImaginaryFriendWhereRelationList, required: false }),
    infiniteScrollLog: t.field({ type: InfiniteScrollLogWhere, required: false }),
    interdimensionalReceipts: t.field({
      type: InterdimensionalReceiptWhereRelationList,
      required: false,
    }),
    lostAndNeverFound: t.field({ type: LostAndNeverFoundWhere, required: false }),
    reverseTransactions: t.field({ type: ReverseTransactionWhereRelationList, required: false }),
    signalGrid: t.field({ type: SignalGridWhere, required: false }),
    symphonyChart: t.field({ type: SymphonyChartWhere, required: false }),
    teleportationFailure: t.field({ type: TeleportationFailureWhere, required: false }),
    thoughtCaches: t.field({ type: ThoughtCacheWhereRelationList, required: false }),
    AND: t.field({ type: [SchrodingerUserWhere], required: false }),
    OR: t.field({ type: [SchrodingerUserWhere], required: false }),
    NOT: t.field({ type: [SchrodingerUserWhere], required: false }),
  }),
});
