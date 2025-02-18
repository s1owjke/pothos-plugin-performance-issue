import { builder } from "src/builder";

import { PortalIndexCreateWithoutRejectedTheories } from "./createWithoutRejectedTheories";
import { PortalIndexWhereUnique } from "./whereUnique";

export const PortalIndexUpdateRelationListWithoutRejectedTheories = builder
  .inputRef<any>("PortalIndexUpdateRelationListWithoutRejectedTheories")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [PortalIndexWhereUnique] }),
      set: t.field({ type: [PortalIndexWhereUnique] }),
      disconnect: t.field({ type: [PortalIndexWhereUnique] }),
      create: t.field({ type: [PortalIndexCreateWithoutRejectedTheories] }),
    }),
  });
