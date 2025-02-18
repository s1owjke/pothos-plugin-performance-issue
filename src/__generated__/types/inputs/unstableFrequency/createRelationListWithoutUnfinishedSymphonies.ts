import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutUnfinishedSymphonies } from "./createWithoutUnfinishedSymphonies";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyCreateRelationListWithoutUnfinishedSymphonies = builder
  .inputRef<any>("UnstableFrequencyCreateRelationListWithoutUnfinishedSymphonies")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      create: t.field({ type: [UnstableFrequencyCreateWithoutUnfinishedSymphonies] }),
    }),
  });
