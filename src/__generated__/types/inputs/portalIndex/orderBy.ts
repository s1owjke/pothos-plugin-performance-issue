import { builder } from "src/builder";

import { SortOrder } from "../../../enums/sortOrder";
import { GhostRecordOrderBy } from "../ghostRecord/orderBy";
import { UnstableFrequencyOrderBy } from "../unstableFrequency/orderBy";

export const PortalIndexOrderBy = builder.inputRef<any>("PortalIndexOrderBy").implement({
  fields: (t) => ({
    id: t.field({ type: SortOrder, required: false }),
    createdAt: t.field({ type: SortOrder, required: false }),
    updatedAt: t.field({ type: SortOrder, required: false }),
    ghostRecord: t.field({ type: GhostRecordOrderBy, required: false }),
    ghostRecordId: t.field({ type: SortOrder, required: false }),
    unstableFrequency: t.field({ type: UnstableFrequencyOrderBy, required: false }),
    unstableFrequencyId: t.field({ type: SortOrder, required: false }),
  }),
});
