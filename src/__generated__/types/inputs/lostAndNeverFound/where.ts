import { builder } from "src/builder";

import { DateTimeFilter } from "../dateTimeFilter";
import { HypotheticalRevenueWhere } from "../hypotheticalRevenue/where";
import { IdFilter } from "../idFilter";
import { ImaginaryFriendWhereRelationList } from "../imaginaryFriend/whereRelationList";
import { SchrodingerUserWhere } from "../schrodingerUser/where";

export const LostAndNeverFoundWhere = builder.inputRef<any>("LostAndNeverFoundWhere").implement({
  fields: (t) => ({
    id: t.field({ type: IdFilter, required: false }),
    createdAt: t.field({ type: DateTimeFilter, required: false }),
    updatedAt: t.field({ type: DateTimeFilter, required: false }),
    hypotheticalRevenue: t.field({ type: HypotheticalRevenueWhere, required: false }),
    hypotheticalRevenueId: t.field({ type: IdFilter, required: false }),
    imaginaryFriend: t.field({ type: ImaginaryFriendWhereRelationList, required: false }),
    schrodingerUser: t.field({ type: SchrodingerUserWhere, required: false }),
    schrodingerUserId: t.field({ type: IdFilter, required: false }),
    AND: t.field({ type: [LostAndNeverFoundWhere], required: false }),
    OR: t.field({ type: [LostAndNeverFoundWhere], required: false }),
    NOT: t.field({ type: [LostAndNeverFoundWhere], required: false }),
  }),
});
