import { builder } from "src/builder";

import { PortalIndexCreateWithoutGhostRecord } from "./createWithoutGhostRecord";
import { PortalIndexUpdateWithoutGhostRecord } from "./updateWithoutGhostRecord";
import { PortalIndexWhereUnique } from "./whereUnique";

export const PortalIndexUpdateRelationWithoutGhostRecord = builder.inputRef<any>("PortalIndexUpdateRelationWithoutGhostRecord").implement({
  fields: (t) => ({
    connect: t.field({ type: PortalIndexWhereUnique }),
    disconnect: t.field({ type: PortalIndexWhereUnique }),
    create: t.field({ type: PortalIndexCreateWithoutGhostRecord }),
    update: t.field({ type: PortalIndexUpdateWithoutGhostRecord }),
  }),
});
