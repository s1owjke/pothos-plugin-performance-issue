import { builder } from "src/builder";

import { UnnecessaryPermissionCreateWithoutVortexReport } from "./createWithoutVortexReport";
import { UnnecessaryPermissionUpdateWithoutVortexReport } from "./updateWithoutVortexReport";
import { UnnecessaryPermissionWhereUnique } from "./whereUnique";

export const UnnecessaryPermissionUpdateRelationWithoutVortexReport = builder
  .inputRef<any>("UnnecessaryPermissionUpdateRelationWithoutVortexReport")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: UnnecessaryPermissionWhereUnique }),
      disconnect: t.field({ type: UnnecessaryPermissionWhereUnique }),
      create: t.field({ type: UnnecessaryPermissionCreateWithoutVortexReport }),
      update: t.field({ type: UnnecessaryPermissionUpdateWithoutVortexReport }),
    }),
  });
