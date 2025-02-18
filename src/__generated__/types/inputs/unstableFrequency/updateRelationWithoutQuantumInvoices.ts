import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutQuantumInvoices } from "./createWithoutQuantumInvoices";
import { UnstableFrequencyUpdateWithoutQuantumInvoices } from "./updateWithoutQuantumInvoices";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyUpdateRelationWithoutQuantumInvoices = builder
  .inputRef<any>("UnstableFrequencyUpdateRelationWithoutQuantumInvoices")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: UnstableFrequencyWhereUnique }),
      disconnect: t.field({ type: UnstableFrequencyWhereUnique }),
      create: t.field({ type: UnstableFrequencyCreateWithoutQuantumInvoices }),
      update: t.field({ type: UnstableFrequencyUpdateWithoutQuantumInvoices }),
    }),
  });
