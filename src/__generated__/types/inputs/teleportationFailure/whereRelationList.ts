import { builder } from "src/builder";

import { TeleportationFailureWhere } from "./where";

export const TeleportationFailureWhereRelationList = builder.inputRef<any>("TeleportationFailureWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: TeleportationFailureWhere, required: false }),
    every: t.field({ type: TeleportationFailureWhere, required: false }),
    none: t.field({ type: TeleportationFailureWhere, required: false }),
  }),
});
