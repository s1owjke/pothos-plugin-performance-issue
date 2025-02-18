import { builder } from "src/builder";

import { MetaphysicalReceiptCreate } from "./create";
import { MetaphysicalReceiptWhereUnique } from "./whereUnique";

export const MetaphysicalReceiptCreateRelationList = builder.inputRef<any>("MetaphysicalReceiptCreateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [MetaphysicalReceiptWhereUnique] }),
    create: t.field({ type: [MetaphysicalReceiptCreate] }),
  }),
});
