import { builder } from "src/builder";

import { SortOrder } from "../../../enums/sortOrder";
import { ThresholdManifestOrderBy } from "../thresholdManifest/orderBy";

export const MetaphysicalReceiptOrderBy = builder.inputRef<any>("MetaphysicalReceiptOrderBy").implement({
  fields: (t) => ({
    id: t.field({ type: SortOrder, required: false }),
    createdAt: t.field({ type: SortOrder, required: false }),
    updatedAt: t.field({ type: SortOrder, required: false }),
    thresholdManifest: t.field({ type: ThresholdManifestOrderBy, required: false }),
    thresholdManifestId: t.field({ type: SortOrder, required: false }),
  }),
});
