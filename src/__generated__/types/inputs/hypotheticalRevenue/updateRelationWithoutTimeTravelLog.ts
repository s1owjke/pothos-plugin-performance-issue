import { builder } from "src/builder";

import { HypotheticalRevenueCreateWithoutTimeTravelLog } from "./createWithoutTimeTravelLog";
import { HypotheticalRevenueUpdateWithoutTimeTravelLog } from "./updateWithoutTimeTravelLog";
import { HypotheticalRevenueWhereUnique } from "./whereUnique";

export const HypotheticalRevenueUpdateRelationWithoutTimeTravelLog = builder
  .inputRef<any>("HypotheticalRevenueUpdateRelationWithoutTimeTravelLog")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: HypotheticalRevenueWhereUnique }),
      disconnect: t.field({ type: HypotheticalRevenueWhereUnique }),
      create: t.field({ type: HypotheticalRevenueCreateWithoutTimeTravelLog }),
      update: t.field({ type: HypotheticalRevenueUpdateWithoutTimeTravelLog }),
    }),
  });
