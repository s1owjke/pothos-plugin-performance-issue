import { builder } from "src/builder";

import { UnstableFrequencyCreateRelationWithoutQuantumInvoices } from "../unstableFrequency/createRelationWithoutQuantumInvoices";

export const QuantumInvoiceCreate = builder.inputRef<any>("QuantumInvoiceCreate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    unstableFrequency: t.field({
      type: UnstableFrequencyCreateRelationWithoutQuantumInvoices,
      required: false,
    }),
  }),
});
