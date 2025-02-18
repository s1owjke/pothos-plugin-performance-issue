import { builder } from "src/builder";

import { RejectedTheoryCreateWithoutPortalIndexes } from "./createWithoutPortalIndexes";
import { RejectedTheoryWhereUnique } from "./whereUnique";

export const RejectedTheoryCreateRelationWithoutPortalIndexes = builder.inputRef<any>("RejectedTheoryCreateRelationWithoutPortalIndexes").implement({
  fields: (t) => ({
    connect: t.field({ type: RejectedTheoryWhereUnique }),
    create: t.field({ type: RejectedTheoryCreateWithoutPortalIndexes }),
  }),
});
