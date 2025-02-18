import { builder } from "src/builder";

import { DimensionalBackupUpdateRelationWithoutSchrodingerUser } from "../dimensionalBackup/updateRelationWithoutSchrodingerUser";
import { EchoChamberUpdateRelationWithoutSchrodingerUser } from "../echoChamber/updateRelationWithoutSchrodingerUser";
import { GhostRecordUpdateRelationWithoutSchrodingerUser } from "../ghostRecord/updateRelationWithoutSchrodingerUser";
import { GravityOverrideUpdateRelationListWithoutSchrodingerUsersToNotify } from "../gravityOverride/updateRelationListWithoutSchrodingerUsersToNotify";
import { InfiniteScrollLogUpdateRelationWithoutSchrodingerUser } from "../infiniteScrollLog/updateRelationWithoutSchrodingerUser";
import { InterdimensionalReceiptUpdateRelationListWithoutSchrodingerUser } from "../interdimensionalReceipt/updateRelationListWithoutSchrodingerUser";
import { LostAndNeverFoundUpdateRelationWithoutSchrodingerUser } from "../lostAndNeverFound/updateRelationWithoutSchrodingerUser";
import { ReverseTransactionUpdateRelationListWithoutSchrodingerUsersToNotify } from "../reverseTransaction/updateRelationListWithoutSchrodingerUsersToNotify";
import { SignalGridUpdateRelationWithoutSchrodingerUser } from "../signalGrid/updateRelationWithoutSchrodingerUser";
import { SymphonyChartUpdateRelationWithoutSchrodingerUser } from "../symphonyChart/updateRelationWithoutSchrodingerUser";
import { TeleportationFailureUpdateRelationWithoutSchrodingerUser } from "../teleportationFailure/updateRelationWithoutSchrodingerUser";
import { ThoughtCacheUpdateRelationListWithoutSchrodingerUser } from "../thoughtCache/updateRelationListWithoutSchrodingerUser";

export const SchrodingerUserUpdateWithoutImaginaryFriends = builder.inputRef<any>("SchrodingerUserUpdateWithoutImaginaryFriends").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    dimensionalBackup: t.field({
      type: DimensionalBackupUpdateRelationWithoutSchrodingerUser,
      required: false,
    }),
    echoChamber: t.field({
      type: EchoChamberUpdateRelationWithoutSchrodingerUser,
      required: false,
    }),
    ghostRecord: t.field({
      type: GhostRecordUpdateRelationWithoutSchrodingerUser,
      required: false,
    }),
    gravityOverrides: t.field({
      type: GravityOverrideUpdateRelationListWithoutSchrodingerUsersToNotify,
      required: false,
    }),
    infiniteScrollLog: t.field({
      type: InfiniteScrollLogUpdateRelationWithoutSchrodingerUser,
      required: false,
    }),
    interdimensionalReceipts: t.field({
      type: InterdimensionalReceiptUpdateRelationListWithoutSchrodingerUser,
      required: false,
    }),
    lostAndNeverFound: t.field({
      type: LostAndNeverFoundUpdateRelationWithoutSchrodingerUser,
      required: false,
    }),
    reverseTransactions: t.field({
      type: ReverseTransactionUpdateRelationListWithoutSchrodingerUsersToNotify,
      required: false,
    }),
    signalGrid: t.field({
      type: SignalGridUpdateRelationWithoutSchrodingerUser,
      required: false,
    }),
    symphonyChart: t.field({
      type: SymphonyChartUpdateRelationWithoutSchrodingerUser,
      required: false,
    }),
    teleportationFailure: t.field({
      type: TeleportationFailureUpdateRelationWithoutSchrodingerUser,
      required: false,
    }),
    thoughtCaches: t.field({
      type: ThoughtCacheUpdateRelationListWithoutSchrodingerUser,
      required: false,
    }),
  }),
});
