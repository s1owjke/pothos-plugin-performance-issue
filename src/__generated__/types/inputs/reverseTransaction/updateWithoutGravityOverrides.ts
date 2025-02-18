import { builder } from "src/builder";

import { ImaginaryFriendUpdateRelationWithoutReverseTransactions } from "../imaginaryFriend/updateRelationWithoutReverseTransactions";
import { SchrodingerUserUpdateRelationListWithoutReverseTransactions } from "../schrodingerUser/updateRelationListWithoutReverseTransactions";
import { UnassignedDestinyUpdateRelationWithoutReverseTransaction } from "../unassignedDestiny/updateRelationWithoutReverseTransaction";
import { UnstableFrequencyUpdateRelationWithoutReverseTransaction } from "../unstableFrequency/updateRelationWithoutReverseTransaction";
import { UnstableFrequencyUpdateRelationWithoutReverseTransaction2 } from "../unstableFrequency/updateRelationWithoutReverseTransaction2";
import { VortexReportUpdateRelationWithoutReverseTransactions } from "../vortexReport/updateRelationWithoutReverseTransactions";

export const ReverseTransactionUpdateWithoutGravityOverrides = builder.inputRef<any>("ReverseTransactionUpdateWithoutGravityOverrides").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    imaginaryFriend: t.field({
      type: ImaginaryFriendUpdateRelationWithoutReverseTransactions,
      required: false,
    }),
    schrodingerUsersToNotify: t.field({
      type: SchrodingerUserUpdateRelationListWithoutReverseTransactions,
      required: false,
    }),
    unassignedDestiny: t.field({
      type: UnassignedDestinyUpdateRelationWithoutReverseTransaction,
      required: false,
    }),
    unstableFrequency: t.field({
      type: UnstableFrequencyUpdateRelationWithoutReverseTransaction,
      required: false,
    }),
    unstableFrequency2: t.field({
      type: UnstableFrequencyUpdateRelationWithoutReverseTransaction2,
      required: false,
    }),
    vortexReport: t.field({
      type: VortexReportUpdateRelationWithoutReverseTransactions,
      required: false,
    }),
  }),
});
