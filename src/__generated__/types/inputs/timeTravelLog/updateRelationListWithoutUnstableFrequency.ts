import { builder } from "src/builder";

import { TimeTravelLogCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { TimeTravelLogWhereUnique } from "./whereUnique";

export const TimeTravelLogUpdateRelationListWithoutUnstableFrequency = builder
  .inputRef<any>("TimeTravelLogUpdateRelationListWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [TimeTravelLogWhereUnique] }),
      set: t.field({ type: [TimeTravelLogWhereUnique] }),
      disconnect: t.field({ type: [TimeTravelLogWhereUnique] }),
      create: t.field({ type: [TimeTravelLogCreateWithoutUnstableFrequency] }),
    }),
  });
