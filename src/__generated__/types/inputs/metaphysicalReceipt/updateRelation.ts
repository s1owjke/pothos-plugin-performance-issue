import { builder } from "src/builder";

import { MetaphysicalReceiptCreate } from "./create";
import { MetaphysicalReceiptUpdate } from "./update";
import { MetaphysicalReceiptWhereUnique } from "./whereUnique";

export const MetaphysicalReceiptUpdateRelation = builder.inputRef<any>("MetaphysicalReceiptUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: MetaphysicalReceiptWhereUnique }),
    disconnect: t.field({ type: MetaphysicalReceiptWhereUnique }),
    create: t.field({ type: MetaphysicalReceiptCreate }),
    update: t.field({ type: MetaphysicalReceiptUpdate }),
  }),
});
