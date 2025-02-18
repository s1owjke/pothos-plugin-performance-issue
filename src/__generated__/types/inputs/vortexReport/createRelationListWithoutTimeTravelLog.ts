import { builder } from "src/builder";

import { VortexReportCreateWithoutTimeTravelLog } from "./createWithoutTimeTravelLog";
import { VortexReportWhereUnique } from "./whereUnique";

export const VortexReportCreateRelationListWithoutTimeTravelLog = builder
  .inputRef<any>("VortexReportCreateRelationListWithoutTimeTravelLog")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [VortexReportWhereUnique] }),
      create: t.field({ type: [VortexReportCreateWithoutTimeTravelLog] }),
    }),
  });
