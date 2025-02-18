import { builder } from "src/builder";

import { PortalIndexCreateWithoutGhostRecord } from "./createWithoutGhostRecord";
import { PortalIndexWhereUnique } from "./whereUnique";

export const PortalIndexCreateRelationWithoutGhostRecord = builder.inputRef<any>("PortalIndexCreateRelationWithoutGhostRecord").implement({
  fields: (t) => ({
    connect: t.field({ type: PortalIndexWhereUnique }),
    create: t.field({ type: PortalIndexCreateWithoutGhostRecord }),
  }),
});
