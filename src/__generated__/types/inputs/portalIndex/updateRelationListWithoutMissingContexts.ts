import { builder } from "src/builder";

import { PortalIndexCreateWithoutMissingContexts } from "./createWithoutMissingContexts";
import { PortalIndexWhereUnique } from "./whereUnique";

export const PortalIndexUpdateRelationListWithoutMissingContexts = builder
  .inputRef<any>("PortalIndexUpdateRelationListWithoutMissingContexts")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [PortalIndexWhereUnique] }),
      set: t.field({ type: [PortalIndexWhereUnique] }),
      disconnect: t.field({ type: [PortalIndexWhereUnique] }),
      create: t.field({ type: [PortalIndexCreateWithoutMissingContexts] }),
    }),
  });
