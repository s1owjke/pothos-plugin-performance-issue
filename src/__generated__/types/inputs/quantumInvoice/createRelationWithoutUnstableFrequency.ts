import { builder } from "src/builder";

import { QuantumInvoiceCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { QuantumInvoiceWhereUnique } from "./whereUnique";

export const QuantumInvoiceCreateRelationWithoutUnstableFrequency = builder
  .inputRef<any>("QuantumInvoiceCreateRelationWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: QuantumInvoiceWhereUnique }),
      create: t.field({ type: QuantumInvoiceCreateWithoutUnstableFrequency }),
    }),
  });
