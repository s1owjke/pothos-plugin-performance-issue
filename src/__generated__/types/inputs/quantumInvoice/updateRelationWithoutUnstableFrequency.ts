import { builder } from "src/builder";

import { QuantumInvoiceCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { QuantumInvoiceUpdateWithoutUnstableFrequency } from "./updateWithoutUnstableFrequency";
import { QuantumInvoiceWhereUnique } from "./whereUnique";

export const QuantumInvoiceUpdateRelationWithoutUnstableFrequency = builder
  .inputRef<any>("QuantumInvoiceUpdateRelationWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: QuantumInvoiceWhereUnique }),
      disconnect: t.field({ type: QuantumInvoiceWhereUnique }),
      create: t.field({ type: QuantumInvoiceCreateWithoutUnstableFrequency }),
      update: t.field({ type: QuantumInvoiceUpdateWithoutUnstableFrequency }),
    }),
  });
