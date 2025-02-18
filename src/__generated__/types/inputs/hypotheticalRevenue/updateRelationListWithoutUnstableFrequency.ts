import { builder } from "src/builder";

import { HypotheticalRevenueCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { HypotheticalRevenueWhereUnique } from "./whereUnique";

export const HypotheticalRevenueUpdateRelationListWithoutUnstableFrequency = builder
  .inputRef<any>("HypotheticalRevenueUpdateRelationListWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [HypotheticalRevenueWhereUnique] }),
      set: t.field({ type: [HypotheticalRevenueWhereUnique] }),
      disconnect: t.field({ type: [HypotheticalRevenueWhereUnique] }),
      create: t.field({ type: [HypotheticalRevenueCreateWithoutUnstableFrequency] }),
    }),
  });
