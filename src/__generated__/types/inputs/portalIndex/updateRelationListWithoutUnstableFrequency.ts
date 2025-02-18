import { builder } from "src/builder";

import { PortalIndexCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { PortalIndexWhereUnique } from "./whereUnique";

export const PortalIndexUpdateRelationListWithoutUnstableFrequency = builder
  .inputRef<any>("PortalIndexUpdateRelationListWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [PortalIndexWhereUnique] }),
      set: t.field({ type: [PortalIndexWhereUnique] }),
      disconnect: t.field({ type: [PortalIndexWhereUnique] }),
      create: t.field({ type: [PortalIndexCreateWithoutUnstableFrequency] }),
    }),
  });
