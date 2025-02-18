import { builder } from "src/builder";

import { InterdimensionalReceiptCreate } from "./create";
import { InterdimensionalReceiptWhereUnique } from "./whereUnique";

export const InterdimensionalReceiptCreateRelation = builder.inputRef<any>("InterdimensionalReceiptCreateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: InterdimensionalReceiptWhereUnique }),
    create: t.field({ type: InterdimensionalReceiptCreate }),
  }),
});
