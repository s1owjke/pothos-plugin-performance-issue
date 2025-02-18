import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutQuantumInvoices } from "./createWithoutQuantumInvoices";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyUpdateRelationListWithoutQuantumInvoices = builder
  .inputRef<any>("UnstableFrequencyUpdateRelationListWithoutQuantumInvoices")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      set: t.field({ type: [UnstableFrequencyWhereUnique] }),
      disconnect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      create: t.field({ type: [UnstableFrequencyCreateWithoutQuantumInvoices] }),
    }),
  });
