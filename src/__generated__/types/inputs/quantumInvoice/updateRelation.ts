import { builder } from "src/builder";

import { QuantumInvoiceCreate } from "./create";
import { QuantumInvoiceUpdate } from "./update";
import { QuantumInvoiceWhereUnique } from "./whereUnique";

export const QuantumInvoiceUpdateRelation = builder.inputRef<any>("QuantumInvoiceUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: QuantumInvoiceWhereUnique }),
    disconnect: t.field({ type: QuantumInvoiceWhereUnique }),
    create: t.field({ type: QuantumInvoiceCreate }),
    update: t.field({ type: QuantumInvoiceUpdate }),
  }),
});
