import { builder } from "src/builder";

import { HypotheticalRevenueUpdateRelationWithoutLostAndNeverFounds } from "../hypotheticalRevenue/updateRelationWithoutLostAndNeverFounds";
import { ImaginaryFriendUpdateRelationListWithoutLostAndNeverFound } from "../imaginaryFriend/updateRelationListWithoutLostAndNeverFound";

export const LostAndNeverFoundUpdateWithoutSchrodingerUser = builder.inputRef<any>("LostAndNeverFoundUpdateWithoutSchrodingerUser").implement({
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
  }),
});
