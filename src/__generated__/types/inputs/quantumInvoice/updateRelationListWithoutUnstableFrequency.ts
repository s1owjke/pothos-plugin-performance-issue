import { builder } from "src/builder";

import { QuantumInvoiceCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { QuantumInvoiceWhereUnique } from "./whereUnique";

export const QuantumInvoiceUpdateRelationListWithoutUnstableFrequency = builder
  .inputRef<any>("QuantumInvoiceUpdateRelationListWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [QuantumInvoiceWhereUnique] }),
      set: t.field({ type: [QuantumInvoiceWhereUnique] }),
      disconnect: t.field({ type: [QuantumInvoiceWhereUnique] }),
      create: t.field({ type: [QuantumInvoiceCreateWithoutUnstableFrequency] }),
    }),
  });
