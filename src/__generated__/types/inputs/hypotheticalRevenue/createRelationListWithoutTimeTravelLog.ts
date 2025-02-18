import { builder } from "src/builder";

import { HypotheticalRevenueCreateWithoutTimeTravelLog } from "./createWithoutTimeTravelLog";
import { HypotheticalRevenueWhereUnique } from "./whereUnique";

export const HypotheticalRevenueCreateRelationListWithoutTimeTravelLog = builder
  .inputRef<any>("HypotheticalRevenueCreateRelationListWithoutTimeTravelLog")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [HypotheticalRevenueWhereUnique] }),
      create: t.field({ type: [HypotheticalRevenueCreateWithoutTimeTravelLog] }),
    }),
  });
