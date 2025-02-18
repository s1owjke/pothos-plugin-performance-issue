import { builder } from "src/builder";

import { PortalIndexCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { PortalIndexWhereUnique } from "./whereUnique";

export const PortalIndexCreateRelationListWithoutUnstableFrequency = builder
  .inputRef<any>("PortalIndexCreateRelationListWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [PortalIndexWhereUnique] }),
      create: t.field({ type: [PortalIndexCreateWithoutUnstableFrequency] }),
    }),
  });
