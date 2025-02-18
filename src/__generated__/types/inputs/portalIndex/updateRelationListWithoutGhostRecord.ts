import { builder } from "src/builder";

import { PortalIndexCreateWithoutGhostRecord } from "./createWithoutGhostRecord";
import { PortalIndexWhereUnique } from "./whereUnique";

export const PortalIndexUpdateRelationListWithoutGhostRecord = builder.inputRef<any>("PortalIndexUpdateRelationListWithoutGhostRecord").implement({
  fields: (t) => ({
    connect: t.field({ type: [PortalIndexWhereUnique] }),
    set: t.field({ type: [PortalIndexWhereUnique] }),
    disconnect: t.field({ type: [PortalIndexWhereUnique] }),
    create: t.field({ type: [PortalIndexCreateWithoutGhostRecord] }),
  }),
});
