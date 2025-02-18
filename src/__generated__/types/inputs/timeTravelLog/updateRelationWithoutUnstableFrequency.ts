import { builder } from "src/builder";

import { TimeTravelLogCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { TimeTravelLogUpdateWithoutUnstableFrequency } from "./updateWithoutUnstableFrequency";
import { TimeTravelLogWhereUnique } from "./whereUnique";

export const TimeTravelLogUpdateRelationWithoutUnstableFrequency = builder
  .inputRef<any>("TimeTravelLogUpdateRelationWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: TimeTravelLogWhereUnique }),
      disconnect: t.field({ type: TimeTravelLogWhereUnique }),
      create: t.field({ type: TimeTravelLogCreateWithoutUnstableFrequency }),
      update: t.field({ type: TimeTravelLogUpdateWithoutUnstableFrequency }),
    }),
  });
