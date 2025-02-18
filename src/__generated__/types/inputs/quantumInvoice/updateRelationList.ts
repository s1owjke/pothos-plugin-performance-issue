import { builder } from "src/builder";

import { QuantumInvoiceCreate } from "./create";
import { QuantumInvoiceWhereUnique } from "./whereUnique";

export const QuantumInvoiceUpdateRelationList = builder.inputRef<any>("QuantumInvoiceUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [QuantumInvoiceWhereUnique] }),
    set: t.field({ type: [QuantumInvoiceWhereUnique] }),
    disconnect: t.field({ type: [QuantumInvoiceWhereUnique] }),
    create: t.field({ type: [QuantumInvoiceCreate] }),
  }),
});
