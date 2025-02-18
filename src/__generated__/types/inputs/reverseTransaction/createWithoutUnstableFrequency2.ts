import { builder } from "src/builder";

import { GravityOverrideCreateRelationListWithoutReverseTransaction } from "../gravityOverride/createRelationListWithoutReverseTransaction";
import { ImaginaryFriendCreateRelationWithoutReverseTransactions } from "../imaginaryFriend/createRelationWithoutReverseTransactions";
import { SchrodingerUserCreateRelationListWithoutReverseTransactions } from "../schrodingerUser/createRelationListWithoutReverseTransactions";
import { UnassignedDestinyCreateRelationWithoutReverseTransaction } from "../unassignedDestiny/createRelationWithoutReverseTransaction";
import { UnstableFrequencyCreateRelationWithoutReverseTransaction } from "../unstableFrequency/createRelationWithoutReverseTransaction";
import { VortexReportCreateRelationWithoutReverseTransactions } from "../vortexReport/createRelationWithoutReverseTransactions";

export const ReverseTransactionCreateWithoutUnstableFrequency2 = builder
  .inputRef<any>("ReverseTransactionCreateWithoutUnstableFrequency2")
  .implement({
    fields: (t) => ({
      createdAt: t.field({ type: "DateTime", required: true }),
      updatedAt: t.field({ type: "DateTime", required: true }),
      gravityOverrides: t.field({
        type: GravityOverrideCreateRelationListWithoutReverseTransaction,
        required: false,
      }),
      imaginaryFriend: t.field({
        type: ImaginaryFriendCreateRelationWithoutReverseTransactions,
        required: false,
      }),
      schrodingerUsersToNotify: t.field({
        type: SchrodingerUserCreateRelationListWithoutReverseTransactions,
        required: false,
      }),
      unassignedDestiny: t.field({
        type: UnassignedDestinyCreateRelationWithoutReverseTransaction,
        required: false,
      }),
      unstableFrequency: t.field({
        type: UnstableFrequencyCreateRelationWithoutReverseTransaction,
        required: false,
      }),
      vortexReport: t.field({
        type: VortexReportCreateRelationWithoutReverseTransactions,
        required: true,
      }),
    }),
  });
