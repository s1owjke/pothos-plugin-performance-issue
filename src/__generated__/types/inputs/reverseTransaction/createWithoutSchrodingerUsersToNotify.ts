import { builder } from "src/builder";

import { GravityOverrideCreateRelationListWithoutReverseTransaction } from "../gravityOverride/createRelationListWithoutReverseTransaction";
import { ImaginaryFriendCreateRelationWithoutReverseTransactions } from "../imaginaryFriend/createRelationWithoutReverseTransactions";
import { UnassignedDestinyCreateRelationWithoutReverseTransaction } from "../unassignedDestiny/createRelationWithoutReverseTransaction";
import { UnstableFrequencyCreateRelationWithoutReverseTransaction } from "../unstableFrequency/createRelationWithoutReverseTransaction";
import { UnstableFrequencyCreateRelationWithoutReverseTransaction2 } from "../unstableFrequency/createRelationWithoutReverseTransaction2";
import { VortexReportCreateRelationWithoutReverseTransactions } from "../vortexReport/createRelationWithoutReverseTransactions";

export const ReverseTransactionCreateWithoutSchrodingerUsersToNotify = builder
  .inputRef<any>("ReverseTransactionCreateWithoutSchrodingerUsersToNotify")
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
      unassignedDestiny: t.field({
        type: UnassignedDestinyCreateRelationWithoutReverseTransaction,
        required: false,
      }),
      unstableFrequency: t.field({
        type: UnstableFrequencyCreateRelationWithoutReverseTransaction,
        required: false,
      }),
      unstableFrequency2: t.field({
        type: UnstableFrequencyCreateRelationWithoutReverseTransaction2,
        required: false,
      }),
      vortexReport: t.field({
        type: VortexReportCreateRelationWithoutReverseTransactions,
        required: true,
      }),
    }),
  });
