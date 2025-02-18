import { builder } from "src/builder";

import { VortexReportCreateWithoutTimeTravelLog } from "./createWithoutTimeTravelLog";
import { VortexReportWhereUnique } from "./whereUnique";

export const VortexReportUpdateRelationListWithoutTimeTravelLog = builder
  .inputRef<any>("VortexReportUpdateRelationListWithoutTimeTravelLog")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [VortexReportWhereUnique] }),
      set: t.field({ type: [VortexReportWhereUnique] }),
      disconnect: t.field({ type: [VortexReportWhereUnique] }),
      create: t.field({ type: [VortexReportCreateWithoutTimeTravelLog] }),
    }),
  });
