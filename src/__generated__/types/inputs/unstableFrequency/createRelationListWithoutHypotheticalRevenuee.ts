import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutHypotheticalRevenuee } from "./createWithoutHypotheticalRevenuee";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyCreateRelationListWithoutHypotheticalRevenuee = builder
  .inputRef<any>("UnstableFrequencyCreateRelationListWithoutHypotheticalRevenuee")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      create: t.field({ type: [UnstableFrequencyCreateWithoutHypotheticalRevenuee] }),
    }),
  });
