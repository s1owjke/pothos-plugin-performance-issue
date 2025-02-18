import { builder } from "src/builder";

import { HypotheticalRevenueCreateWithoutVortexReports } from "./createWithoutVortexReports";
import { HypotheticalRevenueWhereUnique } from "./whereUnique";

export const HypotheticalRevenueCreateRelationListWithoutVortexReports = builder
  .inputRef<any>("HypotheticalRevenueCreateRelationListWithoutVortexReports")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [HypotheticalRevenueWhereUnique] }),
      create: t.field({ type: [HypotheticalRevenueCreateWithoutVortexReports] }),
    }),
  });
