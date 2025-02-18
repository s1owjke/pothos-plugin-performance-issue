import { builder } from "src/builder";

import { VortexReportCreateWithoutHypotheticalRevenue } from "./createWithoutHypotheticalRevenue";
import { VortexReportWhereUnique } from "./whereUnique";

export const VortexReportCreateRelationListWithoutHypotheticalRevenue = builder
  .inputRef<any>("VortexReportCreateRelationListWithoutHypotheticalRevenue")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [VortexReportWhereUnique] }),
      create: t.field({ type: [VortexReportCreateWithoutHypotheticalRevenue] }),
    }),
  });
