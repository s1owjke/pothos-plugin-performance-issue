import { builder } from "src/builder";

import { VortexReportCreateWithoutTimeTravelLog } from "./createWithoutTimeTravelLog";
import { VortexReportUpdateWithoutTimeTravelLog } from "./updateWithoutTimeTravelLog";
import { VortexReportWhereUnique } from "./whereUnique";

export const VortexReportUpdateRelationWithoutTimeTravelLog = builder.inputRef<any>("VortexReportUpdateRelationWithoutTimeTravelLog").implement({
  fields: (t) => ({
    connect: t.field({ type: VortexReportWhereUnique }),
    disconnect: t.field({ type: VortexReportWhereUnique }),
    create: t.field({ type: VortexReportCreateWithoutTimeTravelLog }),
    update: t.field({ type: VortexReportUpdateWithoutTimeTravelLog }),
  }),
});
