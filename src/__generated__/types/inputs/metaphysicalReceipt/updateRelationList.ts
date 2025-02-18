import { builder } from "src/builder";

import { MetaphysicalReceiptCreate } from "./create";
import { MetaphysicalReceiptWhereUnique } from "./whereUnique";

export const MetaphysicalReceiptUpdateRelationList = builder.inputRef<any>("MetaphysicalReceiptUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [MetaphysicalReceiptWhereUnique] }),
    set: t.field({ type: [MetaphysicalReceiptWhereUnique] }),
    disconnect: t.field({ type: [MetaphysicalReceiptWhereUnique] }),
    create: t.field({ type: [MetaphysicalReceiptCreate] }),
  }),
});
