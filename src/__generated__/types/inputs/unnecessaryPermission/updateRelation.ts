import { builder } from "src/builder";

import { UnnecessaryPermissionCreate } from "./create";
import { UnnecessaryPermissionUpdate } from "./update";
import { UnnecessaryPermissionWhereUnique } from "./whereUnique";

export const UnnecessaryPermissionUpdateRelation = builder.inputRef<any>("UnnecessaryPermissionUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: UnnecessaryPermissionWhereUnique }),
    disconnect: t.field({ type: UnnecessaryPermissionWhereUnique }),
    create: t.field({ type: UnnecessaryPermissionCreate }),
    update: t.field({ type: UnnecessaryPermissionUpdate }),
  }),
});
