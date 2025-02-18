import { builder } from "src/builder";

import { UnfinishedSymphonyCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { UnfinishedSymphonyUpdateWithoutUnstableFrequency } from "./updateWithoutUnstableFrequency";
import { UnfinishedSymphonyWhereUnique } from "./whereUnique";

export const UnfinishedSymphonyUpdateRelationWithoutUnstableFrequency = builder
  .inputRef<any>("UnfinishedSymphonyUpdateRelationWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: UnfinishedSymphonyWhereUnique }),
      disconnect: t.field({ type: UnfinishedSymphonyWhereUnique }),
      create: t.field({ type: UnfinishedSymphonyCreateWithoutUnstableFrequency }),
      update: t.field({ type: UnfinishedSymphonyUpdateWithoutUnstableFrequency }),
    }),
  });
