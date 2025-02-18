import { builder } from "src/builder";

import { DateTimeFilter } from "../dateTimeFilter";
import { GravityOverrideWhereRelationList } from "../gravityOverride/whereRelationList";
import { IdFilter } from "../idFilter";
import { ImaginaryFriendWhere } from "../imaginaryFriend/where";
import { SchrodingerUserWhereRelationList } from "../schrodingerUser/whereRelationList";
import { UnassignedDestinyWhere } from "../unassignedDestiny/where";
import { UnstableFrequencyWhere } from "../unstableFrequency/where";
import { VortexReportWhere } from "../vortexReport/where";

export const ReverseTransactionWhere = builder.inputRef<any>("ReverseTransactionWhere").implement({
  fields: (t) => ({
    id: t.field({ type: IdFilter, required: false }),
    createdAt: t.field({ type: DateTimeFilter, required: false }),
    updatedAt: t.field({ type: DateTimeFilter, required: false }),
    gravityOverrides: t.field({ type: GravityOverrideWhereRelationList, required: false }),
    imaginaryFriend: t.field({ type: ImaginaryFriendWhere, required: false }),
    imaginaryFriendId: t.field({ type: IdFilter, required: false }),
    schrodingerUsersToNotify: t.field({ type: SchrodingerUserWhereRelationList, required: false }),
    unassignedDestiny: t.field({ type: UnassignedDestinyWhere, required: false }),
    unassignedDestinyId: t.field({ type: IdFilter, required: false }),
    unstableFrequency: t.field({ type: UnstableFrequencyWhere, required: false }),
    unstableFrequency2: t.field({ type: UnstableFrequencyWhere, required: false }),
    unstableFrequencyId: t.field({ type: IdFilter, required: false }),
    unstableFrequencyId2: t.field({ type: IdFilter, required: false }),
    vortexReport: t.field({ type: VortexReportWhere, required: false }),
    vortexReportId: t.field({ type: IdFilter, required: false }),
    AND: t.field({ type: [ReverseTransactionWhere], required: false }),
    OR: t.field({ type: [ReverseTransactionWhere], required: false }),
    NOT: t.field({ type: [ReverseTransactionWhere], required: false }),
  }),
});
