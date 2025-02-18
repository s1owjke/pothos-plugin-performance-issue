import { builder } from "src/builder";

import { ImaginaryFriendUpdateRelationListWithoutLostAndNeverFound } from "../imaginaryFriend/updateRelationListWithoutLostAndNeverFound";
import { SchrodingerUserUpdateRelationWithoutLostAndNeverFound } from "../schrodingerUser/updateRelationWithoutLostAndNeverFound";

export const LostAndNeverFoundUpdateWithoutHypotheticalRevenue = builder
  .inputRef<any>("LostAndNeverFoundUpdateWithoutHypotheticalRevenue")
  .implement({
    fields: (t) => ({
      createdAt: t.field({ type: "DateTime", required: false }),
      updatedAt: t.field({ type: "DateTime", required: false }),
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
