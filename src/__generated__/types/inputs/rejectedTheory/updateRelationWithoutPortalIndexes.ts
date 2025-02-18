import { builder } from "src/builder";

import { RejectedTheoryCreateWithoutPortalIndexes } from "./createWithoutPortalIndexes";
import { RejectedTheoryUpdateWithoutPortalIndexes } from "./updateWithoutPortalIndexes";
import { RejectedTheoryWhereUnique } from "./whereUnique";

export const RejectedTheoryUpdateRelationWithoutPortalIndexes = builder.inputRef<any>("RejectedTheoryUpdateRelationWithoutPortalIndexes").implement({
  fields: (t) => ({
    connect: t.field({ type: RejectedTheoryWhereUnique }),
    disconnect: t.field({ type: RejectedTheoryWhereUnique }),
    create: t.field({ type: RejectedTheoryCreateWithoutPortalIndexes }),
    update: t.field({ type: RejectedTheoryUpdateWithoutPortalIndexes }),
  }),
});
