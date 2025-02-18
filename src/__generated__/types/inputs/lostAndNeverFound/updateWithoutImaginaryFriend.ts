import { builder } from "src/builder";

import { HypotheticalRevenueUpdateRelationWithoutLostAndNeverFounds } from "../hypotheticalRevenue/updateRelationWithoutLostAndNeverFounds";
import { SchrodingerUserUpdateRelationWithoutLostAndNeverFound } from "../schrodingerUser/updateRelationWithoutLostAndNeverFound";

export const LostAndNeverFoundUpdateWithoutImaginaryFriend = builder.inputRef<any>("LostAndNeverFoundUpdateWithoutImaginaryFriend").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    hypotheticalRevenue: t.field({
      type: HypotheticalRevenueUpdateRelationWithoutLostAndNeverFounds,
      required: false,
    }),
    schrodingerUser: t.field({
      type: SchrodingerUserUpdateRelationWithoutLostAndNeverFound,
      required: false,
    }),
  }),
});
