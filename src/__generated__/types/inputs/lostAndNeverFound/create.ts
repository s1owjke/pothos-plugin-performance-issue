import { builder } from "src/builder";

import { HypotheticalRevenueCreateRelationWithoutLostAndNeverFounds } from "../hypotheticalRevenue/createRelationWithoutLostAndNeverFounds";
import { ImaginaryFriendCreateRelationListWithoutLostAndNeverFound } from "../imaginaryFriend/createRelationListWithoutLostAndNeverFound";
import { SchrodingerUserCreateRelationWithoutLostAndNeverFound } from "../schrodingerUser/createRelationWithoutLostAndNeverFound";

export const LostAndNeverFoundCreate = builder.inputRef<any>("LostAndNeverFoundCreate").implement({
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
    schrodingerUser: t.field({
      type: SchrodingerUserCreateRelationWithoutLostAndNeverFound,
      required: true,
    }),
  }),
});
