import { builder } from "src/builder";

import { HypotheticalRevenueCreateWithoutVortexReports } from "./createWithoutVortexReports";
import { HypotheticalRevenueUpdateWithoutVortexReports } from "./updateWithoutVortexReports";
import { HypotheticalRevenueWhereUnique } from "./whereUnique";

export const HypotheticalRevenueUpdateRelationWithoutVortexReports = builder
  .inputRef<any>("HypotheticalRevenueUpdateRelationWithoutVortexReports")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: HypotheticalRevenueWhereUnique }),
      disconnect: t.field({ type: HypotheticalRevenueWhereUnique }),
      create: t.field({ type: HypotheticalRevenueCreateWithoutVortexReports }),
      update: t.field({ type: HypotheticalRevenueUpdateWithoutVortexReports }),
    }),
  });
