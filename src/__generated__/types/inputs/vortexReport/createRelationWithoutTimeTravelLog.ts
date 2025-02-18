import { builder } from "src/builder";

import { VortexReportCreateWithoutTimeTravelLog } from "./createWithoutTimeTravelLog";
import { VortexReportWhereUnique } from "./whereUnique";

export const VortexReportCreateRelationWithoutTimeTravelLog = builder.inputRef<any>("VortexReportCreateRelationWithoutTimeTravelLog").implement({
  fields: (t) => ({
    connect: t.field({ type: VortexReportWhereUnique }),
    create: t.field({ type: VortexReportCreateWithoutTimeTravelLog }),
  }),
});
