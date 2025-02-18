import { builder } from "src/builder";

import { QuantumInvoiceCreate } from "./create";
import { QuantumInvoiceWhereUnique } from "./whereUnique";

export const QuantumInvoiceCreateRelationList = builder.inputRef<any>("QuantumInvoiceCreateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [QuantumInvoiceWhereUnique] }),
    create: t.field({ type: [QuantumInvoiceCreate] }),
  }),
});
