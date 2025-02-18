import { builder } from "src/builder";

import { UnnecessaryPermissionCreateWithoutVortexReport } from "./createWithoutVortexReport";
import { UnnecessaryPermissionWhereUnique } from "./whereUnique";

export const UnnecessaryPermissionCreateRelationWithoutVortexReport = builder
  .inputRef<any>("UnnecessaryPermissionCreateRelationWithoutVortexReport")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: UnnecessaryPermissionWhereUnique }),
      create: t.field({ type: UnnecessaryPermissionCreateWithoutVortexReport }),
    }),
  });
