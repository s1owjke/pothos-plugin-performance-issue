import { builder } from "src/builder";

import { UnstableFrequencyUpdateRelationWithoutQuantumInvoices } from "../unstableFrequency/updateRelationWithoutQuantumInvoices";

export const QuantumInvoiceUpdate = builder.inputRef<any>("QuantumInvoiceUpdate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    unstableFrequency: t.field({
      type: UnstableFrequencyUpdateRelationWithoutQuantumInvoices,
      required: false,
    }),
  }),
});
