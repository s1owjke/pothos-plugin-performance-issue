import { builder } from "src/builder";

import { GravityOverrideUpdateRelationListWithoutReverseTransaction } from "../gravityOverride/updateRelationListWithoutReverseTransaction";
import { ImaginaryFriendUpdateRelationWithoutReverseTransactions } from "../imaginaryFriend/updateRelationWithoutReverseTransactions";
import { SchrodingerUserUpdateRelationListWithoutReverseTransactions } from "../schrodingerUser/updateRelationListWithoutReverseTransactions";
import { UnassignedDestinyUpdateRelationWithoutReverseTransaction } from "../unassignedDestiny/updateRelationWithoutReverseTransaction";
import { UnstableFrequencyUpdateRelationWithoutReverseTransaction } from "../unstableFrequency/updateRelationWithoutReverseTransaction";
import { UnstableFrequencyUpdateRelationWithoutReverseTransaction2 } from "../unstableFrequency/updateRelationWithoutReverseTransaction2";

export const ReverseTransactionUpdateWithoutVortexReport = builder.inputRef<any>("ReverseTransactionUpdateWithoutVortexReport").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    gravityOverrides: t.field({
      type: GravityOverrideUpdateRelationListWithoutReverseTransaction,
      required: false,
    }),
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
  }),
});
