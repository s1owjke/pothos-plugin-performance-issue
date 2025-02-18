import { builder } from "src/builder";

import { GravityOverrideUpdateRelationListWithoutReverseTransaction } from "../gravityOverride/updateRelationListWithoutReverseTransaction";
import { ImaginaryFriendUpdateRelationWithoutReverseTransactions } from "../imaginaryFriend/updateRelationWithoutReverseTransactions";
import { SchrodingerUserUpdateRelationListWithoutReverseTransactions } from "../schrodingerUser/updateRelationListWithoutReverseTransactions";
import { UnstableFrequencyUpdateRelationWithoutReverseTransaction } from "../unstableFrequency/updateRelationWithoutReverseTransaction";
import { UnstableFrequencyUpdateRelationWithoutReverseTransaction2 } from "../unstableFrequency/updateRelationWithoutReverseTransaction2";
import { VortexReportUpdateRelationWithoutReverseTransactions } from "../vortexReport/updateRelationWithoutReverseTransactions";

export const ReverseTransactionUpdateWithoutUnassignedDestiny = builder.inputRef<any>("ReverseTransactionUpdateWithoutUnassignedDestiny").implement({
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
