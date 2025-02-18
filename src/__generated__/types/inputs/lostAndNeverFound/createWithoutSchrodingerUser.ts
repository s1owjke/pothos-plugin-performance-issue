import { builder } from "src/builder";

import { HypotheticalRevenueCreateRelationWithoutLostAndNeverFounds } from "../hypotheticalRevenue/createRelationWithoutLostAndNeverFounds";
import { ImaginaryFriendCreateRelationListWithoutLostAndNeverFound } from "../imaginaryFriend/createRelationListWithoutLostAndNeverFound";

export const LostAndNeverFoundCreateWithoutSchrodingerUser = builder.inputRef<any>("LostAndNeverFoundCreateWithoutSchrodingerUser").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    hypotheticalRevenue: t.field({
      type: HypotheticalRevenueCreateRelationWithoutLostAndNeverFounds,
      required: true,
    }),
    imaginaryFriend: t.field({
      type: ImaginaryFriendCreateRelationListWithoutLostAndNeverFound,
      required: false,
    }),
  }),
});
