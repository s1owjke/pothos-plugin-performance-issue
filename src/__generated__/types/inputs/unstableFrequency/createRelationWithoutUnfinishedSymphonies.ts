import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutUnfinishedSymphonies } from "./createWithoutUnfinishedSymphonies";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyCreateRelationWithoutUnfinishedSymphonies = builder
  .inputRef<any>("UnstableFrequencyCreateRelationWithoutUnfinishedSymphonies")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: UnstableFrequencyWhereUnique }),
      create: t.field({ type: UnstableFrequencyCreateWithoutUnfinishedSymphonies }),
    }),
  });
