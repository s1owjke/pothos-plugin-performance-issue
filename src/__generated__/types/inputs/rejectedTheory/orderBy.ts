import { builder } from "src/builder";

import { SortOrder } from "../../../enums/sortOrder";
import { GhostRecordOrderBy } from "../ghostRecord/orderBy";
import { ThresholdManifestOrderBy } from "../thresholdManifest/orderBy";

export const RejectedTheoryOrderBy = builder.inputRef<any>("RejectedTheoryOrderBy").implement({
  fields: (t) => ({
    id: t.field({ type: SortOrder, required: false }),
    createdAt: t.field({ type: SortOrder, required: false }),
    updatedAt: t.field({ type: SortOrder, required: false }),
    ghostRecord: t.field({ type: GhostRecordOrderBy, required: false }),
    ghostRecordId: t.field({ type: SortOrder, required: false }),
    parentRejectedTheory: t.field({ type: RejectedTheoryOrderBy, required: false }),
    parentRejectedTheoryId: t.field({ type: SortOrder, required: false }),
    thresholdManifest: t.field({ type: ThresholdManifestOrderBy, required: false }),
    thresholdManifestId: t.field({ type: SortOrder, required: false }),
  }),
});
