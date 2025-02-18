import { builder } from "src/builder";

import { PortalIndexCreateWithoutClassifiedSillinesses } from "./createWithoutClassifiedSillinesses";
import { PortalIndexWhereUnique } from "./whereUnique";

export const PortalIndexCreateRelationWithoutClassifiedSillinesses = builder
  .inputRef<any>("PortalIndexCreateRelationWithoutClassifiedSillinesses")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: PortalIndexWhereUnique }),
      create: t.field({ type: PortalIndexCreateWithoutClassifiedSillinesses }),
    }),
  });
