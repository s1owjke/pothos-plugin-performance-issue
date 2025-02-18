import { builder } from "src/builder";

import { UnfinishedSymphonyCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { UnfinishedSymphonyWhereUnique } from "./whereUnique";

export const UnfinishedSymphonyCreateRelationWithoutUnstableFrequency = builder
  .inputRef<any>("UnfinishedSymphonyCreateRelationWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: UnfinishedSymphonyWhereUnique }),
      create: t.field({ type: UnfinishedSymphonyCreateWithoutUnstableFrequency }),
    }),
  });
