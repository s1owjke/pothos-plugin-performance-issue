import { builder } from "src/builder";

import { PortalIndexCreateWithoutMissingContexts } from "./createWithoutMissingContexts";
import { PortalIndexUpdateWithoutMissingContexts } from "./updateWithoutMissingContexts";
import { PortalIndexWhereUnique } from "./whereUnique";

export const PortalIndexUpdateRelationWithoutMissingContexts = builder.inputRef<any>("PortalIndexUpdateRelationWithoutMissingContexts").implement({
  fields: (t) => ({
    connect: t.field({ type: PortalIndexWhereUnique }),
    disconnect: t.field({ type: PortalIndexWhereUnique }),
    create: t.field({ type: PortalIndexCreateWithoutMissingContexts }),
    update: t.field({ type: PortalIndexUpdateWithoutMissingContexts }),
  }),
});
