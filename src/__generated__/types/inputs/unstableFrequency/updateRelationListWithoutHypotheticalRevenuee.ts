import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutHypotheticalRevenuee } from "./createWithoutHypotheticalRevenuee";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyUpdateRelationListWithoutHypotheticalRevenuee = builder
  .inputRef<any>("UnstableFrequencyUpdateRelationListWithoutHypotheticalRevenuee")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      set: t.field({ type: [UnstableFrequencyWhereUnique] }),
      disconnect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      create: t.field({ type: [UnstableFrequencyCreateWithoutHypotheticalRevenuee] }),
    }),
  });
