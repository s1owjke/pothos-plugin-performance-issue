import { builder } from "src/builder";

import { QuantumInvoiceCreate } from "./create";
import { QuantumInvoiceWhereUnique } from "./whereUnique";

export const QuantumInvoiceCreateRelation = builder.inputRef<any>("QuantumInvoiceCreateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: QuantumInvoiceWhereUnique }),
    create: t.field({ type: QuantumInvoiceCreate }),
  }),
});
