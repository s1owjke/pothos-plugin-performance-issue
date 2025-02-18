import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutQuantumInvoices } from "./createWithoutQuantumInvoices";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyCreateRelationWithoutQuantumInvoices = builder
  .inputRef<any>("UnstableFrequencyCreateRelationWithoutQuantumInvoices")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: UnstableFrequencyWhereUnique }),
      create: t.field({ type: UnstableFrequencyCreateWithoutQuantumInvoices }),
    }),
  });
