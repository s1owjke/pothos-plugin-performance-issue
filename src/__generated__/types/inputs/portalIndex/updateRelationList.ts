import { builder } from "src/builder";

import { PortalIndexCreate } from "./create";
import { PortalIndexWhereUnique } from "./whereUnique";

export const PortalIndexUpdateRelationList = builder.inputRef<any>("PortalIndexUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [PortalIndexWhereUnique] }),
    set: t.field({ type: [PortalIndexWhereUnique] }),
    disconnect: t.field({ type: [PortalIndexWhereUnique] }),
    create: t.field({ type: [PortalIndexCreate] }),
  }),
});
