import { builder } from "src/builder";

import { InterdimensionalReceiptCreate } from "./create";
import { InterdimensionalReceiptWhereUnique } from "./whereUnique";

export const InterdimensionalReceiptUpdateRelationList = builder.inputRef<any>("InterdimensionalReceiptUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [InterdimensionalReceiptWhereUnique] }),
    set: t.field({ type: [InterdimensionalReceiptWhereUnique] }),
    disconnect: t.field({ type: [InterdimensionalReceiptWhereUnique] }),
    create: t.field({ type: [InterdimensionalReceiptCreate] }),
  }),
});
