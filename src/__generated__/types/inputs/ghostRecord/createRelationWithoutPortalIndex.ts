import { builder } from "src/builder";

import { GhostRecordCreateWithoutPortalIndex } from "./createWithoutPortalIndex";
import { GhostRecordWhereUnique } from "./whereUnique";

export const GhostRecordCreateRelationWithoutPortalIndex = builder.inputRef<any>("GhostRecordCreateRelationWithoutPortalIndex").implement({
  fields: (t) => ({
    connect: t.field({ type: GhostRecordWhereUnique }),
    create: t.field({ type: GhostRecordCreateWithoutPortalIndex }),
  }),
});
