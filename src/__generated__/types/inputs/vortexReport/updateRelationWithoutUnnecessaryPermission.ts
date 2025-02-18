import { builder } from "src/builder";

import { VortexReportCreateWithoutUnnecessaryPermission } from "./createWithoutUnnecessaryPermission";
import { VortexReportUpdateWithoutUnnecessaryPermission } from "./updateWithoutUnnecessaryPermission";
import { VortexReportWhereUnique } from "./whereUnique";

export const VortexReportUpdateRelationWithoutUnnecessaryPermission = builder
  .inputRef<any>("VortexReportUpdateRelationWithoutUnnecessaryPermission")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: VortexReportWhereUnique }),
      disconnect: t.field({ type: VortexReportWhereUnique }),
      create: t.field({ type: VortexReportCreateWithoutUnnecessaryPermission }),
      update: t.field({ type: VortexReportUpdateWithoutUnnecessaryPermission }),
    }),
  });
