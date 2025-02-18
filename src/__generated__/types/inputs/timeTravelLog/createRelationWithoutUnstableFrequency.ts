import { builder } from "src/builder";

import { TimeTravelLogCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { TimeTravelLogWhereUnique } from "./whereUnique";

export const TimeTravelLogCreateRelationWithoutUnstableFrequency = builder
  .inputRef<any>("TimeTravelLogCreateRelationWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: TimeTravelLogWhereUnique }),
      create: t.field({ type: TimeTravelLogCreateWithoutUnstableFrequency }),
    }),
  });
