import { builder } from "src/builder";

import { TimeTravelLogCreateWithoutHypotheticalRevenue } from "./createWithoutHypotheticalRevenue";
import { TimeTravelLogWhereUnique } from "./whereUnique";

export const TimeTravelLogCreateRelationListWithoutHypotheticalRevenue = builder
  .inputRef<any>("TimeTravelLogCreateRelationListWithoutHypotheticalRevenue")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [TimeTravelLogWhereUnique] }),
      create: t.field({ type: [TimeTravelLogCreateWithoutHypotheticalRevenue] }),
    }),
  });
