import { builder } from "src/builder";

import { TeleportationFailureCreate } from "./create";
import { TeleportationFailureWhereUnique } from "./whereUnique";

export const TeleportationFailureUpdateRelationList = builder.inputRef<any>("TeleportationFailureUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [TeleportationFailureWhereUnique] }),
    set: t.field({ type: [TeleportationFailureWhereUnique] }),
    disconnect: t.field({ type: [TeleportationFailureWhereUnique] }),
    create: t.field({ type: [TeleportationFailureCreate] }),
  }),
});
