import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutQuantumInvoices } from "./createWithoutQuantumInvoices";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyCreateRelationListWithoutQuantumInvoices = builder
  .inputRef<any>("UnstableFrequencyCreateRelationListWithoutQuantumInvoices")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      create: t.field({ type: [UnstableFrequencyCreateWithoutQuantumInvoices] }),
    }),
  });
