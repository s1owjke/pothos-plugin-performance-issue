import { builder } from "src/builder";

import { TimeTravelLogCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { TimeTravelLogWhereUnique } from "./whereUnique";

export const TimeTravelLogCreateRelationListWithoutUnstableFrequency = builder
  .inputRef<any>("TimeTravelLogCreateRelationListWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [TimeTravelLogWhereUnique] }),
      create: t.field({ type: [TimeTravelLogCreateWithoutUnstableFrequency] }),
    }),
  });
