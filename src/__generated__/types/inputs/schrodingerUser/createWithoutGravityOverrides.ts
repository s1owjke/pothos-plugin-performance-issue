import { builder } from "src/builder";

import { DimensionalBackupCreateRelationWithoutSchrodingerUser } from "../dimensionalBackup/createRelationWithoutSchrodingerUser";
import { EchoChamberCreateRelationWithoutSchrodingerUser } from "../echoChamber/createRelationWithoutSchrodingerUser";
import { GhostRecordCreateRelationWithoutSchrodingerUser } from "../ghostRecord/createRelationWithoutSchrodingerUser";
import { ImaginaryFriendCreateRelationListWithoutSchrodingerUsersToNotify } from "../imaginaryFriend/createRelationListWithoutSchrodingerUsersToNotify";
import { InfiniteScrollLogCreateRelationWithoutSchrodingerUser } from "../infiniteScrollLog/createRelationWithoutSchrodingerUser";
import { InterdimensionalReceiptCreateRelationListWithoutSchrodingerUser } from "../interdimensionalReceipt/createRelationListWithoutSchrodingerUser";
import { LostAndNeverFoundCreateRelationWithoutSchrodingerUser } from "../lostAndNeverFound/createRelationWithoutSchrodingerUser";
import { ReverseTransactionCreateRelationListWithoutSchrodingerUsersToNotify } from "../reverseTransaction/createRelationListWithoutSchrodingerUsersToNotify";
import { SignalGridCreateRelationWithoutSchrodingerUser } from "../signalGrid/createRelationWithoutSchrodingerUser";
import { SymphonyChartCreateRelationWithoutSchrodingerUser } from "../symphonyChart/createRelationWithoutSchrodingerUser";
import { TeleportationFailureCreateRelationWithoutSchrodingerUser } from "../teleportationFailure/createRelationWithoutSchrodingerUser";
import { ThoughtCacheCreateRelationListWithoutSchrodingerUser } from "../thoughtCache/createRelationListWithoutSchrodingerUser";

export const SchrodingerUserCreateWithoutGravityOverrides = builder.inputRef<any>("SchrodingerUserCreateWithoutGravityOverrides").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    dimensionalBackup: t.field({
      type: DimensionalBackupCreateRelationWithoutSchrodingerUser,
      required: false,
    }),
    echoChamber: t.field({
      type: EchoChamberCreateRelationWithoutSchrodingerUser,
      required: false,
    }),
    ghostRecord: t.field({
      type: GhostRecordCreateRelationWithoutSchrodingerUser,
      required: false,
    }),
    imaginaryFriends: t.field({
      type: ImaginaryFriendCreateRelationListWithoutSchrodingerUsersToNotify,
      required: false,
    }),
    infiniteScrollLog: t.field({
      type: InfiniteScrollLogCreateRelationWithoutSchrodingerUser,
      required: false,
    }),
    interdimensionalReceipts: t.field({
      type: InterdimensionalReceiptCreateRelationListWithoutSchrodingerUser,
      required: false,
    }),
    lostAndNeverFound: t.field({
      type: LostAndNeverFoundCreateRelationWithoutSchrodingerUser,
      required: false,
    }),
    reverseTransactions: t.field({
      type: ReverseTransactionCreateRelationListWithoutSchrodingerUsersToNotify,
      required: false,
    }),
    signalGrid: t.field({
      type: SignalGridCreateRelationWithoutSchrodingerUser,
      required: false,
    }),
    symphonyChart: t.field({
      type: SymphonyChartCreateRelationWithoutSchrodingerUser,
      required: false,
    }),
    teleportationFailure: t.field({
      type: TeleportationFailureCreateRelationWithoutSchrodingerUser,
      required: false,
    }),
    thoughtCaches: t.field({
      type: ThoughtCacheCreateRelationListWithoutSchrodingerUser,
      required: false,
    }),
  }),
});
