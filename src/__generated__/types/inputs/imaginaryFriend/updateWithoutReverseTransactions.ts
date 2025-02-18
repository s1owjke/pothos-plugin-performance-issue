import { builder } from "src/builder";

import { GravityOverrideUpdateRelationListWithoutImaginaryFriend } from "../gravityOverride/updateRelationListWithoutImaginaryFriend";
import { HypotheticalRevenueUpdateRelationWithoutImaginaryFriends } from "../hypotheticalRevenue/updateRelationWithoutImaginaryFriends";
import { LostAndNeverFoundUpdateRelationWithoutImaginaryFriend } from "../lostAndNeverFound/updateRelationWithoutImaginaryFriend";
import { SchrodingerUserUpdateRelationListWithoutImaginaryFriends } from "../schrodingerUser/updateRelationListWithoutImaginaryFriends";
import { UnassignedDestinyUpdateRelationWithoutImaginaryFriend } from "../unassignedDestiny/updateRelationWithoutImaginaryFriend";
import { UnstableFrequencyUpdateRelationWithoutImaginaryFriends } from "../unstableFrequency/updateRelationWithoutImaginaryFriends";
import { UnstableFrequencyUpdateRelationWithoutImaginaryFriends2 } from "../unstableFrequency/updateRelationWithoutImaginaryFriends2";

export const ImaginaryFriendUpdateWithoutReverseTransactions = builder.inputRef<any>("ImaginaryFriendUpdateWithoutReverseTransactions").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    gravityOverrides: t.field({
      type: GravityOverrideUpdateRelationListWithoutImaginaryFriend,
      required: false,
    }),
    hypotheticalRevenue: t.field({
      type: HypotheticalRevenueUpdateRelationWithoutImaginaryFriends,
      required: false,
    }),
    lostAndNeverFound: t.field({
      type: LostAndNeverFoundUpdateRelationWithoutImaginaryFriend,
      required: false,
    }),
    schrodingerUsersToNotify: t.field({
      type: SchrodingerUserUpdateRelationListWithoutImaginaryFriends,
      required: false,
    }),
    unassignedDestiny: t.field({
      type: UnassignedDestinyUpdateRelationWithoutImaginaryFriend,
      required: false,
    }),
    unstableFrequency: t.field({
      type: UnstableFrequencyUpdateRelationWithoutImaginaryFriends,
      required: false,
    }),
    unstableFrequency2: t.field({
      type: UnstableFrequencyUpdateRelationWithoutImaginaryFriends2,
      required: false,
    }),
  }),
});
