import { builder } from "src/builder";

import { PortalIndexCreateWithoutRejectedTheories } from "./createWithoutRejectedTheories";
import { PortalIndexWhereUnique } from "./whereUnique";

export const PortalIndexCreateRelationWithoutRejectedTheories = builder.inputRef<any>("PortalIndexCreateRelationWithoutRejectedTheories").implement({
  fields: (t) => ({
    connect: t.field({ type: PortalIndexWhereUnique }),
    create: t.field({ type: PortalIndexCreateWithoutRejectedTheories }),
  }),
});
