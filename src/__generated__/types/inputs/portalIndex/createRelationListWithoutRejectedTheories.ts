import { builder } from "src/builder";

import { PortalIndexCreateWithoutRejectedTheories } from "./createWithoutRejectedTheories";
import { PortalIndexWhereUnique } from "./whereUnique";

export const PortalIndexCreateRelationListWithoutRejectedTheories = builder
  .inputRef<any>("PortalIndexCreateRelationListWithoutRejectedTheories")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [PortalIndexWhereUnique] }),
      create: t.field({ type: [PortalIndexCreateWithoutRejectedTheories] }),
    }),
  });
