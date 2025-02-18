import { builder } from "src/builder";

export const QuantumInvoiceCreateMany = builder.inputRef<any>("QuantumInvoiceCreateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    unstableFrequencyId: t.field({ type: "ID", required: false }),
  }),
});
