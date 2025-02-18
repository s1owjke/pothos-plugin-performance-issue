import { builder } from "src/builder";

import { PortalIndexCreateWithoutRejectedTheories } from "./createWithoutRejectedTheories";
import { PortalIndexUpdateWithoutRejectedTheories } from "./updateWithoutRejectedTheories";
import { PortalIndexWhereUnique } from "./whereUnique";

export const PortalIndexUpdateRelationWithoutRejectedTheories = builder.inputRef<any>("PortalIndexUpdateRelationWithoutRejectedTheories").implement({
  fields: (t) => ({
    connect: t.field({ type: PortalIndexWhereUnique }),
    disconnect: t.field({ type: PortalIndexWhereUnique }),
    create: t.field({ type: PortalIndexCreateWithoutRejectedTheories }),
    update: t.field({ type: PortalIndexUpdateWithoutRejectedTheories }),
  }),
});
