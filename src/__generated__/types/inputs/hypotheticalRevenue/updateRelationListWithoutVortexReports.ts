import { builder } from "src/builder";

import { HypotheticalRevenueCreateWithoutVortexReports } from "./createWithoutVortexReports";
import { HypotheticalRevenueWhereUnique } from "./whereUnique";

export const HypotheticalRevenueUpdateRelationListWithoutVortexReports = builder
  .inputRef<any>("HypotheticalRevenueUpdateRelationListWithoutVortexReports")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [HypotheticalRevenueWhereUnique] }),
      set: t.field({ type: [HypotheticalRevenueWhereUnique] }),
      disconnect: t.field({ type: [HypotheticalRevenueWhereUnique] }),
      create: t.field({ type: [HypotheticalRevenueCreateWithoutVortexReports] }),
    }),
  });
