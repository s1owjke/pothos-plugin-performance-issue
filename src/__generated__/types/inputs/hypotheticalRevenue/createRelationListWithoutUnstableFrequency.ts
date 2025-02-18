import { builder } from "src/builder";

import { HypotheticalRevenueCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { HypotheticalRevenueWhereUnique } from "./whereUnique";

export const HypotheticalRevenueCreateRelationListWithoutUnstableFrequency = builder
  .inputRef<any>("HypotheticalRevenueCreateRelationListWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [HypotheticalRevenueWhereUnique] }),
      create: t.field({ type: [HypotheticalRevenueCreateWithoutUnstableFrequency] }),
    }),
  });
