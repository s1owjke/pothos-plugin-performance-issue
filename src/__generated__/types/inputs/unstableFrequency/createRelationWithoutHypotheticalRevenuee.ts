import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutHypotheticalRevenuee } from "./createWithoutHypotheticalRevenuee";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyCreateRelationWithoutHypotheticalRevenuee = builder
  .inputRef<any>("UnstableFrequencyCreateRelationWithoutHypotheticalRevenuee")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: UnstableFrequencyWhereUnique }),
      create: t.field({ type: UnstableFrequencyCreateWithoutHypotheticalRevenuee }),
    }),
  });
