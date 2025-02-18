import { builder } from "src/builder";

import { QuantumInvoiceWhere } from "./where";

export const QuantumInvoiceWhereRelationList = builder.inputRef<any>("QuantumInvoiceWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: QuantumInvoiceWhere, required: false }),
    every: t.field({ type: QuantumInvoiceWhere, required: false }),
    none: t.field({ type: QuantumInvoiceWhere, required: false }),
  }),
});
