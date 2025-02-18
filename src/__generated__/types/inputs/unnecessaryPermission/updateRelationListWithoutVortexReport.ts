import { builder } from "src/builder";

import { UnnecessaryPermissionCreateWithoutVortexReport } from "./createWithoutVortexReport";
import { UnnecessaryPermissionWhereUnique } from "./whereUnique";

export const UnnecessaryPermissionUpdateRelationListWithoutVortexReport = builder
  .inputRef<any>("UnnecessaryPermissionUpdateRelationListWithoutVortexReport")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [UnnecessaryPermissionWhereUnique] }),
      set: t.field({ type: [UnnecessaryPermissionWhereUnique] }),
      disconnect: t.field({ type: [UnnecessaryPermissionWhereUnique] }),
      create: t.field({ type: [UnnecessaryPermissionCreateWithoutVortexReport] }),
    }),
  });
