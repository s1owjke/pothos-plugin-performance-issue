import { builder } from "src/builder";

import { PortalIndexCreate } from "./create";
import { PortalIndexUpdate } from "./update";
import { PortalIndexWhereUnique } from "./whereUnique";

export const PortalIndexUpdateRelation = builder.inputRef<any>("PortalIndexUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: PortalIndexWhereUnique }),
    disconnect: t.field({ type: PortalIndexWhereUnique }),
    create: t.field({ type: PortalIndexCreate }),
    update: t.field({ type: PortalIndexUpdate }),
  }),
});
