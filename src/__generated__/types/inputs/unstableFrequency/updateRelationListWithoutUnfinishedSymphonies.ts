import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutUnfinishedSymphonies } from "./createWithoutUnfinishedSymphonies";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyUpdateRelationListWithoutUnfinishedSymphonies = builder
  .inputRef<any>("UnstableFrequencyUpdateRelationListWithoutUnfinishedSymphonies")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      set: t.field({ type: [UnstableFrequencyWhereUnique] }),
      disconnect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      create: t.field({ type: [UnstableFrequencyCreateWithoutUnfinishedSymphonies] }),
    }),
  });
