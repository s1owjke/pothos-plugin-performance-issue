import { builder } from "src/builder";

import { PortalIndexCreateWithoutClassifiedSillinesses } from "./createWithoutClassifiedSillinesses";
import { PortalIndexUpdateWithoutClassifiedSillinesses } from "./updateWithoutClassifiedSillinesses";
import { PortalIndexWhereUnique } from "./whereUnique";

export const PortalIndexUpdateRelationWithoutClassifiedSillinesses = builder
  .inputRef<any>("PortalIndexUpdateRelationWithoutClassifiedSillinesses")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: PortalIndexWhereUnique }),
      disconnect: t.field({ type: PortalIndexWhereUnique }),
      create: t.field({ type: PortalIndexCreateWithoutClassifiedSillinesses }),
      update: t.field({ type: PortalIndexUpdateWithoutClassifiedSillinesses }),
    }),
  });
