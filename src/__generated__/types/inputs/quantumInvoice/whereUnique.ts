import { builder } from "src/builder";

export const QuantumInvoiceWhereUnique = builder.inputRef<any>("QuantumInvoiceWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: true }),
  }),
});
