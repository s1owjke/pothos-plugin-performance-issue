import { builder } from "src/builder";

import { VortexReportCreateWithoutHypotheticalRevenue } from "./createWithoutHypotheticalRevenue";
import { VortexReportWhereUnique } from "./whereUnique";

export const VortexReportUpdateRelationListWithoutHypotheticalRevenue = builder
  .inputRef<any>("VortexReportUpdateRelationListWithoutHypotheticalRevenue")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [VortexReportWhereUnique] }),
      set: t.field({ type: [VortexReportWhereUnique] }),
      disconnect: t.field({ type: [VortexReportWhereUnique] }),
      create: t.field({ type: [VortexReportCreateWithoutHypotheticalRevenue] }),
    }),
  });
