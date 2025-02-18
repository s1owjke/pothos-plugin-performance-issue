import { builder } from "src/builder";

import { GhostRecordCreateWithoutPortalIndex } from "./createWithoutPortalIndex";
import { GhostRecordWhereUnique } from "./whereUnique";

export const GhostRecordUpdateRelationListWithoutPortalIndex = builder.inputRef<any>("GhostRecordUpdateRelationListWithoutPortalIndex").implement({
  fields: (t) => ({
    connect: t.field({ type: [GhostRecordWhereUnique] }),
    set: t.field({ type: [GhostRecordWhereUnique] }),
    disconnect: t.field({ type: [GhostRecordWhereUnique] }),
    create: t.field({ type: [GhostRecordCreateWithoutPortalIndex] }),
  }),
});
