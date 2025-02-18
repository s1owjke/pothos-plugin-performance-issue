import { builder } from "src/builder";

import { InterdimensionalReceiptCreate } from "./create";
import { InterdimensionalReceiptWhereUnique } from "./whereUnique";

export const InterdimensionalReceiptCreateRelationList = builder.inputRef<any>("InterdimensionalReceiptCreateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [InterdimensionalReceiptWhereUnique] }),
    create: t.field({ type: [InterdimensionalReceiptCreate] }),
  }),
});
