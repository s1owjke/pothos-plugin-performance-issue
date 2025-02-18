import { builder } from "src/builder";

import { PendingDisasterCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { PendingDisasterUpdateWithoutUnstableFrequency } from "./updateWithoutUnstableFrequency";
import { PendingDisasterWhereUnique } from "./whereUnique";

export const PendingDisasterUpdateRelationWithoutUnstableFrequency = builder
  .inputRef<any>("PendingDisasterUpdateRelationWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: PendingDisasterWhereUnique }),
      disconnect: t.field({ type: PendingDisasterWhereUnique }),
      create: t.field({ type: PendingDisasterCreateWithoutUnstableFrequency }),
      update: t.field({ type: PendingDisasterUpdateWithoutUnstableFrequency }),
    }),
  });
