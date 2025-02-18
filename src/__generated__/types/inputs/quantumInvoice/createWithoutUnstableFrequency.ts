import { builder } from "src/builder";

export const QuantumInvoiceCreateWithoutUnstableFrequency = builder.inputRef<any>("QuantumInvoiceCreateWithoutUnstableFrequency").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
  }),
});
