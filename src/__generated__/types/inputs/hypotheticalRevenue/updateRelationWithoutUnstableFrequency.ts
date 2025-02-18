import { builder } from "src/builder";

import { HypotheticalRevenueCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { HypotheticalRevenueUpdateWithoutUnstableFrequency } from "./updateWithoutUnstableFrequency";
import { HypotheticalRevenueWhereUnique } from "./whereUnique";

export const HypotheticalRevenueUpdateRelationWithoutUnstableFrequency = builder
  .inputRef<any>("HypotheticalRevenueUpdateRelationWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: HypotheticalRevenueWhereUnique }),
      disconnect: t.field({ type: HypotheticalRevenueWhereUnique }),
      create: t.field({ type: HypotheticalRevenueCreateWithoutUnstableFrequency }),
      update: t.field({ type: HypotheticalRevenueUpdateWithoutUnstableFrequency }),
    }),
  });
