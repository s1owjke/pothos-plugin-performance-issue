import { builder } from "src/builder";

import { VortexReportCreateWithoutUnnecessaryPermission } from "./createWithoutUnnecessaryPermission";
import { VortexReportWhereUnique } from "./whereUnique";

export const VortexReportUpdateRelationListWithoutUnnecessaryPermission = builder
  .inputRef<any>("VortexReportUpdateRelationListWithoutUnnecessaryPermission")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [VortexReportWhereUnique] }),
      set: t.field({ type: [VortexReportWhereUnique] }),
      disconnect: t.field({ type: [VortexReportWhereUnique] }),
      create: t.field({ type: [VortexReportCreateWithoutUnnecessaryPermission] }),
    }),
  });
