import { builder } from "src/builder";

import { SortOrder } from "../../../enums/sortOrder";
import { GhostRecordOrderBy } from "../ghostRecord/orderBy";
import { InvisibleTransactionOrderBy } from "../invisibleTransaction/orderBy";
import { UnstableFrequencyOrderBy } from "../unstableFrequency/orderBy";

export const ArtificialPotatoOrderBy = builder.inputRef<any>("ArtificialPotatoOrderBy").implement({
  fields: (t) => ({
    id: t.field({ type: SortOrder, required: false }),
    createdAt: t.field({ type: SortOrder, required: false }),
    updatedAt: t.field({ type: SortOrder, required: false }),
    ghostRecord: t.field({ type: GhostRecordOrderBy, required: false }),
    ghostRecordId: t.field({ type: SortOrder, required: false }),
    invisibleTransaction: t.field({ type: InvisibleTransactionOrderBy, required: false }),
    unstableFrequency: t.field({ type: UnstableFrequencyOrderBy, required: false }),
    unstableFrequencyId: t.field({ type: SortOrder, required: false }),
  }),
});
