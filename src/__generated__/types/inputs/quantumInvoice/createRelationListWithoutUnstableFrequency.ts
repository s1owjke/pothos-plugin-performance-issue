import { builder } from "src/builder";

import { QuantumInvoiceCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { QuantumInvoiceWhereUnique } from "./whereUnique";

export const QuantumInvoiceCreateRelationListWithoutUnstableFrequency = builder
  .inputRef<any>("QuantumInvoiceCreateRelationListWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [QuantumInvoiceWhereUnique] }),
      create: t.field({ type: [QuantumInvoiceCreateWithoutUnstableFrequency] }),
    }),
  });
