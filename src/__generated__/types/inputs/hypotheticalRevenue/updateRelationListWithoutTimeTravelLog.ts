import { builder } from "src/builder";

import { HypotheticalRevenueCreateWithoutTimeTravelLog } from "./createWithoutTimeTravelLog";
import { HypotheticalRevenueWhereUnique } from "./whereUnique";

export const HypotheticalRevenueUpdateRelationListWithoutTimeTravelLog = builder
  .inputRef<any>("HypotheticalRevenueUpdateRelationListWithoutTimeTravelLog")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [HypotheticalRevenueWhereUnique] }),
      set: t.field({ type: [HypotheticalRevenueWhereUnique] }),
      disconnect: t.field({ type: [HypotheticalRevenueWhereUnique] }),
      create: t.field({ type: [HypotheticalRevenueCreateWithoutTimeTravelLog] }),
    }),
  });
