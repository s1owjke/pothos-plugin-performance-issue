import { builder } from "src/builder";

import { ImaginaryFriendCreateRelationListWithoutLostAndNeverFound } from "../imaginaryFriend/createRelationListWithoutLostAndNeverFound";
import { SchrodingerUserCreateRelationWithoutLostAndNeverFound } from "../schrodingerUser/createRelationWithoutLostAndNeverFound";

export const LostAndNeverFoundCreateWithoutHypotheticalRevenue = builder
  .inputRef<any>("LostAndNeverFoundCreateWithoutHypotheticalRevenue")
  .implement({
    fields: (t) => ({
      createdAt: t.field({ type: "DateTime", required: true }),
      updatedAt: t.field({ type: "DateTime", required: true }),
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
