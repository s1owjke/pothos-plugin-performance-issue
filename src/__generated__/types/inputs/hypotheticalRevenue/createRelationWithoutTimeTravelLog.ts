import { builder } from "src/builder";

import { HypotheticalRevenueCreateWithoutTimeTravelLog } from "./createWithoutTimeTravelLog";
import { HypotheticalRevenueWhereUnique } from "./whereUnique";

export const HypotheticalRevenueCreateRelationWithoutTimeTravelLog = builder
  .inputRef<any>("HypotheticalRevenueCreateRelationWithoutTimeTravelLog")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: HypotheticalRevenueWhereUnique }),
      create: t.field({ type: HypotheticalRevenueCreateWithoutTimeTravelLog }),
    }),
  });
