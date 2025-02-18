import { builder } from "src/builder";

import { VortexReportCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { VortexReportWhereUnique } from "./whereUnique";

export const VortexReportUpdateRelationListWithoutUnstableFrequency = builder
  .inputRef<any>("VortexReportUpdateRelationListWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [VortexReportWhereUnique] }),
      set: t.field({ type: [VortexReportWhereUnique] }),
      disconnect: t.field({ type: [VortexReportWhereUnique] }),
      create: t.field({ type: [VortexReportCreateWithoutUnstableFrequency] }),
    }),
  });
