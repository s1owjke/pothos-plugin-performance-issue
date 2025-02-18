import { builder } from "src/builder";

import { PortalIndexCreateWithoutGhostRecord } from "./createWithoutGhostRecord";
import { PortalIndexWhereUnique } from "./whereUnique";

export const PortalIndexCreateRelationListWithoutGhostRecord = builder.inputRef<any>("PortalIndexCreateRelationListWithoutGhostRecord").implement({
  fields: (t) => ({
    connect: t.field({ type: [PortalIndexWhereUnique] }),
    create: t.field({ type: [PortalIndexCreateWithoutGhostRecord] }),
  }),
});
