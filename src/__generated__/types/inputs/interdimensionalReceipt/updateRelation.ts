import { builder } from "src/builder";

import { InterdimensionalReceiptCreate } from "./create";
import { InterdimensionalReceiptUpdate } from "./update";
import { InterdimensionalReceiptWhereUnique } from "./whereUnique";

export const InterdimensionalReceiptUpdateRelation = builder.inputRef<any>("InterdimensionalReceiptUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: InterdimensionalReceiptWhereUnique }),
    disconnect: t.field({ type: InterdimensionalReceiptWhereUnique }),
    create: t.field({ type: InterdimensionalReceiptCreate }),
    update: t.field({ type: InterdimensionalReceiptUpdate }),
  }),
});
