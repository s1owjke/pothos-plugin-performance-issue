import { builder } from "src/builder";

import { DateTimeFilter } from "../dateTimeFilter";
import { IdFilter } from "../idFilter";
import { ThresholdManifestWhere } from "../thresholdManifest/where";

export const MetaphysicalReceiptWhere = builder.inputRef<any>("MetaphysicalReceiptWhere").implement({
  fields: (t) => ({
    id: t.field({ type: IdFilter, required: false }),
    createdAt: t.field({ type: DateTimeFilter, required: false }),
    updatedAt: t.field({ type: DateTimeFilter, required: false }),
    thresholdManifest: t.field({ type: ThresholdManifestWhere, required: false }),
    thresholdManifestId: t.field({ type: IdFilter, required: false }),
    AND: t.field({ type: [MetaphysicalReceiptWhere], required: false }),
    OR: t.field({ type: [MetaphysicalReceiptWhere], required: false }),
    NOT: t.field({ type: [MetaphysicalReceiptWhere], required: false }),
  }),
});
