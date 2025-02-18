import { builder } from "src/builder";

import { SortOrder } from "../../../enums/sortOrder";
import { ImaginaryFriendOrderBy } from "../imaginaryFriend/orderBy";
import { UnassignedDestinyOrderBy } from "../unassignedDestiny/orderBy";
import { UnstableFrequencyOrderBy } from "../unstableFrequency/orderBy";
import { VortexReportOrderBy } from "../vortexReport/orderBy";

export const ReverseTransactionOrderBy = builder.inputRef<any>("ReverseTransactionOrderBy").implement({
  fields: (t) => ({
    id: t.field({ type: SortOrder, required: false }),
    createdAt: t.field({ type: SortOrder, required: false }),
    updatedAt: t.field({ type: SortOrder, required: false }),
    imaginaryFriend: t.field({ type: ImaginaryFriendOrderBy, required: false }),
    imaginaryFriendId: t.field({ type: SortOrder, required: false }),
    unassignedDestiny: t.field({ type: UnassignedDestinyOrderBy, required: false }),
    unassignedDestinyId: t.field({ type: SortOrder, required: false }),
    unstableFrequency: t.field({ type: UnstableFrequencyOrderBy, required: false }),
    unstableFrequency2: t.field({ type: UnstableFrequencyOrderBy, required: false }),
    unstableFrequencyId: t.field({ type: SortOrder, required: false }),
    unstableFrequencyId2: t.field({ type: SortOrder, required: false }),
    vortexReport: t.field({ type: VortexReportOrderBy, required: false }),
    vortexReportId: t.field({ type: SortOrder, required: false }),
  }),
});
