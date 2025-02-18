import { builder } from "src/builder";

import { VortexReportCreateWithoutHypotheticalRevenue } from "./createWithoutHypotheticalRevenue";
import { VortexReportUpdateWithoutHypotheticalRevenue } from "./updateWithoutHypotheticalRevenue";
import { VortexReportWhereUnique } from "./whereUnique";

export const VortexReportUpdateRelationWithoutHypotheticalRevenue = builder
  .inputRef<any>("VortexReportUpdateRelationWithoutHypotheticalRevenue")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: VortexReportWhereUnique }),
      disconnect: t.field({ type: VortexReportWhereUnique }),
      create: t.field({ type: VortexReportCreateWithoutHypotheticalRevenue }),
      update: t.field({ type: VortexReportUpdateWithoutHypotheticalRevenue }),
    }),
  });
