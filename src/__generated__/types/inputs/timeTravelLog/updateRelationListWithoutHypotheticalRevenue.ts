import { builder } from "src/builder";

import { TimeTravelLogCreateWithoutHypotheticalRevenue } from "./createWithoutHypotheticalRevenue";
import { TimeTravelLogWhereUnique } from "./whereUnique";

export const TimeTravelLogUpdateRelationListWithoutHypotheticalRevenue = builder
  .inputRef<any>("TimeTravelLogUpdateRelationListWithoutHypotheticalRevenue")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [TimeTravelLogWhereUnique] }),
      set: t.field({ type: [TimeTravelLogWhereUnique] }),
      disconnect: t.field({ type: [TimeTravelLogWhereUnique] }),
      create: t.field({ type: [TimeTravelLogCreateWithoutHypotheticalRevenue] }),
    }),
  });
