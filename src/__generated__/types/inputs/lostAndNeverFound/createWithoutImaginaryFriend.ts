import { builder } from "src/builder";

import { HypotheticalRevenueCreateRelationWithoutLostAndNeverFounds } from "../hypotheticalRevenue/createRelationWithoutLostAndNeverFounds";
import { SchrodingerUserCreateRelationWithoutLostAndNeverFound } from "../schrodingerUser/createRelationWithoutLostAndNeverFound";

export const LostAndNeverFoundCreateWithoutImaginaryFriend = builder.inputRef<any>("LostAndNeverFoundCreateWithoutImaginaryFriend").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    hypotheticalRevenue: t.field({
      type: HypotheticalRevenueCreateRelationWithoutLostAndNeverFounds,
      required: true,
    }),
    schrodingerUser: t.field({
      type: SchrodingerUserCreateRelationWithoutLostAndNeverFound,
      required: true,
    }),
  }),
});
