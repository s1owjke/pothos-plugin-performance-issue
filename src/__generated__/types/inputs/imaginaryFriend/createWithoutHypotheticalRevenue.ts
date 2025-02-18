import { builder } from "src/builder";

import { GravityOverrideCreateRelationListWithoutImaginaryFriend } from "../gravityOverride/createRelationListWithoutImaginaryFriend";
import { LostAndNeverFoundCreateRelationWithoutImaginaryFriend } from "../lostAndNeverFound/createRelationWithoutImaginaryFriend";
import { ReverseTransactionCreateRelationListWithoutImaginaryFriend } from "../reverseTransaction/createRelationListWithoutImaginaryFriend";
import { SchrodingerUserCreateRelationListWithoutImaginaryFriends } from "../schrodingerUser/createRelationListWithoutImaginaryFriends";
import { UnassignedDestinyCreateRelationWithoutImaginaryFriend } from "../unassignedDestiny/createRelationWithoutImaginaryFriend";
import { UnstableFrequencyCreateRelationWithoutImaginaryFriends } from "../unstableFrequency/createRelationWithoutImaginaryFriends";
import { UnstableFrequencyCreateRelationWithoutImaginaryFriends2 } from "../unstableFrequency/createRelationWithoutImaginaryFriends2";

export const ImaginaryFriendCreateWithoutHypotheticalRevenue = builder.inputRef<any>("ImaginaryFriendCreateWithoutHypotheticalRevenue").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    gravityOverrides: t.field({
      type: GravityOverrideCreateRelationListWithoutImaginaryFriend,
      required: false,
    }),
    lostAndNeverFound: t.field({
      type: LostAndNeverFoundCreateRelationWithoutImaginaryFriend,
      required: false,
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
