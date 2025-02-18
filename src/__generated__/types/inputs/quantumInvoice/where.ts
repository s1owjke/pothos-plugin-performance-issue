import { builder } from "src/builder";

import { DateTimeFilter } from "../dateTimeFilter";
import { IdFilter } from "../idFilter";
import { UnstableFrequencyWhere } from "../unstableFrequency/where";

export const QuantumInvoiceWhere = builder.inputRef<any>("QuantumInvoiceWhere").implement({
  fields: (t) => ({
    id: t.field({ type: IdFilter, required: false }),
    createdAt: t.field({ type: DateTimeFilter, required: false }),
    updatedAt: t.field({ type: DateTimeFilter, required: false }),
    unstableFrequency: t.field({ type: UnstableFrequencyWhere, required: false }),
    unstableFrequencyId: t.field({ type: IdFilter, required: false }),
    AND: t.field({ type: [QuantumInvoiceWhere], required: false }),
    OR: t.field({ type: [QuantumInvoiceWhere], required: false }),
    NOT: t.field({ type: [QuantumInvoiceWhere], required: false }),
  }),
});
