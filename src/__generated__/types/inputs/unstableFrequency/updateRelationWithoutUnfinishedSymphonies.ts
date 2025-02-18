import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutUnfinishedSymphonies } from "./createWithoutUnfinishedSymphonies";
import { UnstableFrequencyUpdateWithoutUnfinishedSymphonies } from "./updateWithoutUnfinishedSymphonies";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyUpdateRelationWithoutUnfinishedSymphonies = builder
  .inputRef<any>("UnstableFrequencyUpdateRelationWithoutUnfinishedSymphonies")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: UnstableFrequencyWhereUnique }),
      disconnect: t.field({ type: UnstableFrequencyWhereUnique }),
      create: t.field({ type: UnstableFrequencyCreateWithoutUnfinishedSymphonies }),
      update: t.field({ type: UnstableFrequencyUpdateWithoutUnfinishedSymphonies }),
    }),
  });
