import { builder } from "src/builder";

import { PortalIndexCreate } from "./create";
import { PortalIndexWhereUnique } from "./whereUnique";

export const PortalIndexCreateRelation = builder.inputRef<any>("PortalIndexCreateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: PortalIndexWhereUnique }),
    create: t.field({ type: PortalIndexCreate }),
  }),
});
