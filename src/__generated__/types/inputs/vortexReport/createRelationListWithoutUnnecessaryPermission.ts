import { builder } from "src/builder";

import { VortexReportCreateWithoutUnnecessaryPermission } from "./createWithoutUnnecessaryPermission";
import { VortexReportWhereUnique } from "./whereUnique";

export const VortexReportCreateRelationListWithoutUnnecessaryPermission = builder
  .inputRef<any>("VortexReportCreateRelationListWithoutUnnecessaryPermission")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [VortexReportWhereUnique] }),
      create: t.field({ type: [VortexReportCreateWithoutUnnecessaryPermission] }),
    }),
  });
