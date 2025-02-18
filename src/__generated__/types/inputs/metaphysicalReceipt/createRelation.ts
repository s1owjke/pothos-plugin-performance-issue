import { builder } from "src/builder";

import { MetaphysicalReceiptCreate } from "./create";
import { MetaphysicalReceiptWhereUnique } from "./whereUnique";

export const MetaphysicalReceiptCreateRelation = builder.inputRef<any>("MetaphysicalReceiptCreateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: MetaphysicalReceiptWhereUnique }),
    create: t.field({ type: MetaphysicalReceiptCreate }),
  }),
});
