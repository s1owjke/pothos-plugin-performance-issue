import { builder } from "src/builder";

import { TeleportationFailureCreate } from "./create";
import { TeleportationFailureWhereUnique } from "./whereUnique";

export const TeleportationFailureCreateRelationList = builder.inputRef<any>("TeleportationFailureCreateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [TeleportationFailureWhereUnique] }),
    create: t.field({ type: [TeleportationFailureCreate] }),
  }),
});
