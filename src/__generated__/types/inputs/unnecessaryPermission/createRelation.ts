import { builder } from "src/builder";

import { UnnecessaryPermissionCreate } from "./create";
import { UnnecessaryPermissionWhereUnique } from "./whereUnique";

export const UnnecessaryPermissionCreateRelation = builder.inputRef<any>("UnnecessaryPermissionCreateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: UnnecessaryPermissionWhereUnique }),
    create: t.field({ type: UnnecessaryPermissionCreate }),
  }),
});
