import { builder } from "src/builder";

import { PortalIndexCreateWithoutClassifiedSillinesses } from "./createWithoutClassifiedSillinesses";
import { PortalIndexWhereUnique } from "./whereUnique";

export const PortalIndexCreateRelationListWithoutClassifiedSillinesses = builder
  .inputRef<any>("PortalIndexCreateRelationListWithoutClassifiedSillinesses")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [PortalIndexWhereUnique] }),
      create: t.field({ type: [PortalIndexCreateWithoutClassifiedSillinesses] }),
    }),
  });
