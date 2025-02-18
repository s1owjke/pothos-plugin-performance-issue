import { builder } from "src/builder";

export const QuantumInvoiceUpdateWithoutUnstableFrequency = builder.inputRef<any>("QuantumInvoiceUpdateWithoutUnstableFrequency").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
  }),
});
