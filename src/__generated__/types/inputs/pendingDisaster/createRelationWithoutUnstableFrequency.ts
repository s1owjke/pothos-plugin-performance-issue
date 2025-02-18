import { builder } from "src/builder";

import { PendingDisasterCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { PendingDisasterWhereUnique } from "./whereUnique";

export const PendingDisasterCreateRelationWithoutUnstableFrequency = builder
  .inputRef<any>("PendingDisasterCreateRelationWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: PendingDisasterWhereUnique }),
      create: t.field({ type: PendingDisasterCreateWithoutUnstableFrequency }),
    }),
  });
