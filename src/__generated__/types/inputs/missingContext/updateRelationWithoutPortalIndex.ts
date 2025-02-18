import { builder } from "src/builder";

import { MissingContextCreateWithoutPortalIndex } from "./createWithoutPortalIndex";
import { MissingContextUpdateWithoutPortalIndex } from "./updateWithoutPortalIndex";
import { MissingContextWhereUnique } from "./whereUnique";

export const MissingContextUpdateRelationWithoutPortalIndex = builder.inputRef<any>("MissingContextUpdateRelationWithoutPortalIndex").implement({
  fields: (t) => ({
    connect: t.field({ type: MissingContextWhereUnique }),
    disconnect: t.field({ type: MissingContextWhereUnique }),
    create: t.field({ type: MissingContextCreateWithoutPortalIndex }),
    update: t.field({ type: MissingContextUpdateWithoutPortalIndex }),
  }),
});
