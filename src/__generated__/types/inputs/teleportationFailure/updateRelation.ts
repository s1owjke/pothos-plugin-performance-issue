import { builder } from "src/builder";

import { TeleportationFailureCreate } from "./create";
import { TeleportationFailureUpdate } from "./update";
import { TeleportationFailureWhereUnique } from "./whereUnique";

export const TeleportationFailureUpdateRelation = builder.inputRef<any>("TeleportationFailureUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: TeleportationFailureWhereUnique }),
    disconnect: t.field({ type: TeleportationFailureWhereUnique }),
    create: t.field({ type: TeleportationFailureCreate }),
    update: t.field({ type: TeleportationFailureUpdate }),
  }),
});
