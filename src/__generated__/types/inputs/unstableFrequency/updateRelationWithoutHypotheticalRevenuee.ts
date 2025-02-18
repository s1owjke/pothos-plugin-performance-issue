import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutHypotheticalRevenuee } from "./createWithoutHypotheticalRevenuee";
import { UnstableFrequencyUpdateWithoutHypotheticalRevenuee } from "./updateWithoutHypotheticalRevenuee";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyUpdateRelationWithoutHypotheticalRevenuee = builder
  .inputRef<any>("UnstableFrequencyUpdateRelationWithoutHypotheticalRevenuee")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: UnstableFrequencyWhereUnique }),
      disconnect: t.field({ type: UnstableFrequencyWhereUnique }),
      create: t.field({ type: UnstableFrequencyCreateWithoutHypotheticalRevenuee }),
      update: t.field({ type: UnstableFrequencyUpdateWithoutHypotheticalRevenuee }),
    }),
  });
