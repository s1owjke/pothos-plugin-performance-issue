import { builder } from "src/builder";

import { DateTimeFilter } from "../dateTimeFilter";
import { GravityOverrideWhereRelationList } from "../gravityOverride/whereRelationList";
import { HypotheticalRevenueWhere } from "../hypotheticalRevenue/where";
import { IdFilter } from "../idFilter";
import { LostAndNeverFoundWhere } from "../lostAndNeverFound/where";
import { ReverseTransactionWhereRelationList } from "../reverseTransaction/whereRelationList";
import { SchrodingerUserWhereRelationList } from "../schrodingerUser/whereRelationList";
import { UnassignedDestinyWhere } from "../unassignedDestiny/where";
import { UnstableFrequencyWhere } from "../unstableFrequency/where";

export const ImaginaryFriendWhere = builder.inputRef<any>("ImaginaryFriendWhere").implement({
  fields: (t) => ({
    id: t.field({ type: IdFilter, required: false }),
    createdAt: t.field({ type: DateTimeFilter, required: false }),
    updatedAt: t.field({ type: DateTimeFilter, required: false }),
    gravityOverrides: t.field({ type: GravityOverrideWhereRelationList, required: false }),
    hypotheticalRevenue: t.field({ type: HypotheticalRevenueWhere, required: false }),
    hypotheticalRevenueId: t.field({ type: IdFilter, required: false }),
    lostAndNeverFound: t.field({ type: LostAndNeverFoundWhere, required: false }),
    lostAndNeverFoundId: t.field({ type: IdFilter, required: false }),
    reverseTransactions: t.field({ type: ReverseTransactionWhereRelationList, required: false }),
    schrodingerUsersToNotify: t.field({ type: SchrodingerUserWhereRelationList, required: false }),
    unassignedDestiny: t.field({ type: UnassignedDestinyWhere, required: false }),
    unassignedDestinyId: t.field({ type: IdFilter, required: false }),
    unstableFrequency: t.field({ type: UnstableFrequencyWhere, required: false }),
    unstableFrequency2: t.field({ type: UnstableFrequencyWhere, required: false }),
    unstableFrequencyId: t.field({ type: IdFilter, required: false }),
    unstableFrequencyId2: t.field({ type: IdFilter, required: false }),
    AND: t.field({ type: [ImaginaryFriendWhere], required: false }),
    OR: t.field({ type: [ImaginaryFriendWhere], required: false }),
    NOT: t.field({ type: [ImaginaryFriendWhere], required: false }),
  }),
});
