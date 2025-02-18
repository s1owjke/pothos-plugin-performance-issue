import { builder } from "src/builder";

import { PortalIndexCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { PortalIndexUpdateWithoutUnstableFrequency } from "./updateWithoutUnstableFrequency";
import { PortalIndexWhereUnique } from "./whereUnique";

export const PortalIndexUpdateRelationWithoutUnstableFrequency = builder
  .inputRef<any>("PortalIndexUpdateRelationWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: PortalIndexWhereUnique }),
      disconnect: t.field({ type: PortalIndexWhereUnique }),
      create: t.field({ type: PortalIndexCreateWithoutUnstableFrequency }),
      update: t.field({ type: PortalIndexUpdateWithoutUnstableFrequency }),
    }),
  });
