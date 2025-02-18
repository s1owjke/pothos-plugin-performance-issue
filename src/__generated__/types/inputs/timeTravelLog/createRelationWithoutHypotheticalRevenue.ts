import { builder } from "src/builder";

import { TimeTravelLogCreateWithoutHypotheticalRevenue } from "./createWithoutHypotheticalRevenue";
import { TimeTravelLogWhereUnique } from "./whereUnique";

export const TimeTravelLogCreateRelationWithoutHypotheticalRevenue = builder
  .inputRef<any>("TimeTravelLogCreateRelationWithoutHypotheticalRevenue")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: TimeTravelLogWhereUnique }),
      create: t.field({ type: TimeTravelLogCreateWithoutHypotheticalRevenue }),
    }),
  });
