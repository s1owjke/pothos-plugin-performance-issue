import { builder } from "src/builder";

import { PortalIndexCreateWithoutMissingContexts } from "./createWithoutMissingContexts";
import { PortalIndexWhereUnique } from "./whereUnique";

export const PortalIndexCreateRelationListWithoutMissingContexts = builder
  .inputRef<any>("PortalIndexCreateRelationListWithoutMissingContexts")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [PortalIndexWhereUnique] }),
      create: t.field({ type: [PortalIndexCreateWithoutMissingContexts] }),
    }),
  });
