import { builder } from "src/builder";

import { PendingDisasterCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { PendingDisasterWhereUnique } from "./whereUnique";

export const PendingDisasterUpdateRelationListWithoutUnstableFrequency = builder
  .inputRef<any>("PendingDisasterUpdateRelationListWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [PendingDisasterWhereUnique] }),
      set: t.field({ type: [PendingDisasterWhereUnique] }),
      disconnect: t.field({ type: [PendingDisasterWhereUnique] }),
      create: t.field({ type: [PendingDisasterCreateWithoutUnstableFrequency] }),
    }),
  });
