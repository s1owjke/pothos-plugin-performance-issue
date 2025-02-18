import { builder } from "src/builder";

import { GravityOverrideCreateRelationListWithoutImaginaryFriend } from "../gravityOverride/createRelationListWithoutImaginaryFriend";
import { HypotheticalRevenueCreateRelationWithoutImaginaryFriends } from "../hypotheticalRevenue/createRelationWithoutImaginaryFriends";
import { ReverseTransactionCreateRelationListWithoutImaginaryFriend } from "../reverseTransaction/createRelationListWithoutImaginaryFriend";
import { SchrodingerUserCreateRelationListWithoutImaginaryFriends } from "../schrodingerUser/createRelationListWithoutImaginaryFriends";
import { UnassignedDestinyCreateRelationWithoutImaginaryFriend } from "../unassignedDestiny/createRelationWithoutImaginaryFriend";
import { UnstableFrequencyCreateRelationWithoutImaginaryFriends } from "../unstableFrequency/createRelationWithoutImaginaryFriends";
import { UnstableFrequencyCreateRelationWithoutImaginaryFriends2 } from "../unstableFrequency/createRelationWithoutImaginaryFriends2";

export const ImaginaryFriendCreateWithoutLostAndNeverFound = builder.inputRef<any>("ImaginaryFriendCreateWithoutLostAndNeverFound").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    gravityOverrides: t.field({
      type: GravityOverrideCreateRelationListWithoutImaginaryFriend,
      required: false,
    }),
    hypotheticalRevenue: t.field({
      type: HypotheticalRevenueCreateRelationWithoutImaginaryFriends,
      required: true,
    }),
    reverseTransactions: t.field({
      type: ReverseTransactionCreateRelationListWithoutImaginaryFriend,
      required: false,
    }),
    schrodingerUsersToNotify: t.field({
      type: SchrodingerUserCreateRelationListWithoutImaginaryFriends,
      required: false,
    }),
    unassignedDestiny: t.field({
      type: UnassignedDestinyCreateRelationWithoutImaginaryFriend,
      required: false,
    }),
    unstableFrequency: t.field({
      type: UnstableFrequencyCreateRelationWithoutImaginaryFriends,
      required: false,
    }),
    unstableFrequency2: t.field({
      type: UnstableFrequencyCreateRelationWithoutImaginaryFriends2,
      required: false,
    }),
  }),
});
