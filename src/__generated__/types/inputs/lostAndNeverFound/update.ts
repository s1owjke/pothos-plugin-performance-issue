import { builder } from "src/builder";

import { HypotheticalRevenueUpdateRelationWithoutLostAndNeverFounds } from "../hypotheticalRevenue/updateRelationWithoutLostAndNeverFounds";
import { ImaginaryFriendUpdateRelationListWithoutLostAndNeverFound } from "../imaginaryFriend/updateRelationListWithoutLostAndNeverFound";
import { SchrodingerUserUpdateRelationWithoutLostAndNeverFound } from "../schrodingerUser/updateRelationWithoutLostAndNeverFound";

export const LostAndNeverFoundUpdate = builder.inputRef<any>("LostAndNeverFoundUpdate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    hypotheticalRevenue: t.field({
      type: HypotheticalRevenueUpdateRelationWithoutLostAndNeverFounds,
      required: false,
    }),
    imaginaryFriend: t.field({
      type: ImaginaryFriendUpdateRelationListWithoutLostAndNeverFound,
      required: false,
    }),
    schrodingerUser: t.field({
      type: SchrodingerUserUpdateRelationWithoutLostAndNeverFound,
      required: false,
    }),
  }),
});
