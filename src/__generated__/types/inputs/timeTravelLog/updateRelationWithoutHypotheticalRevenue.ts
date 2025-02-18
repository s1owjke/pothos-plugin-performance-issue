import { builder } from "src/builder";

import { TimeTravelLogCreateWithoutHypotheticalRevenue } from "./createWithoutHypotheticalRevenue";
import { TimeTravelLogUpdateWithoutHypotheticalRevenue } from "./updateWithoutHypotheticalRevenue";
import { TimeTravelLogWhereUnique } from "./whereUnique";

export const TimeTravelLogUpdateRelationWithoutHypotheticalRevenue = builder
  .inputRef<any>("TimeTravelLogUpdateRelationWithoutHypotheticalRevenue")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: TimeTravelLogWhereUnique }),
      disconnect: t.field({ type: TimeTravelLogWhereUnique }),
      create: t.field({ type: TimeTravelLogCreateWithoutHypotheticalRevenue }),
      update: t.field({ type: TimeTravelLogUpdateWithoutHypotheticalRevenue }),
    }),
  });
