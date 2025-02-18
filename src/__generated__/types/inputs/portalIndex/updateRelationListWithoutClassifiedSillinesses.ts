import { builder } from "src/builder";

import { PortalIndexCreateWithoutClassifiedSillinesses } from "./createWithoutClassifiedSillinesses";
import { PortalIndexWhereUnique } from "./whereUnique";

export const PortalIndexUpdateRelationListWithoutClassifiedSillinesses = builder
  .inputRef<any>("PortalIndexUpdateRelationListWithoutClassifiedSillinesses")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [PortalIndexWhereUnique] }),
      set: t.field({ type: [PortalIndexWhereUnique] }),
      disconnect: t.field({ type: [PortalIndexWhereUnique] }),
      create: t.field({ type: [PortalIndexCreateWithoutClassifiedSillinesses] }),
    }),
  });
