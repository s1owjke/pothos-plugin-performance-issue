import { builder } from "src/builder";

import { UnfinishedSymphonyCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { UnfinishedSymphonyWhereUnique } from "./whereUnique";

export const UnfinishedSymphonyUpdateRelationListWithoutUnstableFrequency = builder
  .inputRef<any>("UnfinishedSymphonyUpdateRelationListWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [UnfinishedSymphonyWhereUnique] }),
      set: t.field({ type: [UnfinishedSymphonyWhereUnique] }),
      disconnect: t.field({ type: [UnfinishedSymphonyWhereUnique] }),
      create: t.field({ type: [UnfinishedSymphonyCreateWithoutUnstableFrequency] }),
    }),
  });
