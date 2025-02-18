import { builder } from "src/builder";

import { UnnecessaryPermissionCreateWithoutVortexReport } from "./createWithoutVortexReport";
import { UnnecessaryPermissionWhereUnique } from "./whereUnique";

export const UnnecessaryPermissionCreateRelationListWithoutVortexReport = builder
  .inputRef<any>("UnnecessaryPermissionCreateRelationListWithoutVortexReport")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [UnnecessaryPermissionWhereUnique] }),
      create: t.field({ type: [UnnecessaryPermissionCreateWithoutVortexReport] }),
    }),
  });
