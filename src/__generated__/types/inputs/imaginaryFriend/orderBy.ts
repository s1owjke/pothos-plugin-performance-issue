import { builder } from "src/builder";

import { SortOrder } from "../../../enums/sortOrder";
import { HypotheticalRevenueOrderBy } from "../hypotheticalRevenue/orderBy";
import { LostAndNeverFoundOrderBy } from "../lostAndNeverFound/orderBy";
import { UnassignedDestinyOrderBy } from "../unassignedDestiny/orderBy";
import { UnstableFrequencyOrderBy } from "../unstableFrequency/orderBy";

export const ImaginaryFriendOrderBy = builder.inputRef<any>("ImaginaryFriendOrderBy").implement({
  fields: (t) => ({
    id: t.field({ type: SortOrder, required: false }),
    createdAt: t.field({ type: SortOrder, required: false }),
    updatedAt: t.field({ type: SortOrder, required: false }),
    hypotheticalRevenue: t.field({ type: HypotheticalRevenueOrderBy, required: false }),
    hypotheticalRevenueId: t.field({ type: SortOrder, required: false }),
    lostAndNeverFound: t.field({ type: LostAndNeverFoundOrderBy, required: false }),
    lostAndNeverFoundId: t.field({ type: SortOrder, required: false }),
    unassignedDestiny: t.field({ type: UnassignedDestinyOrderBy, required: false }),
    unassignedDestinyId: t.field({ type: SortOrder, required: false }),
    unstableFrequency: t.field({ type: UnstableFrequencyOrderBy, required: false }),
    unstableFrequency2: t.field({ type: UnstableFrequencyOrderBy, required: false }),
    unstableFrequencyId: t.field({ type: SortOrder, required: false }),
    unstableFrequencyId2: t.field({ type: SortOrder, required: false }),
  }),
});
