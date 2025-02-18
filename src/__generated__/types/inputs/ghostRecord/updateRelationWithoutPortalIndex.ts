import { builder } from "src/builder";

import { GhostRecordCreateWithoutPortalIndex } from "./createWithoutPortalIndex";
import { GhostRecordUpdateWithoutPortalIndex } from "./updateWithoutPortalIndex";
import { GhostRecordWhereUnique } from "./whereUnique";

export const GhostRecordUpdateRelationWithoutPortalIndex = builder.inputRef<any>("GhostRecordUpdateRelationWithoutPortalIndex").implement({
  fields: (t) => ({
    connect: t.field({ type: GhostRecordWhereUnique }),
    disconnect: t.field({ type: GhostRecordWhereUnique }),
    create: t.field({ type: GhostRecordCreateWithoutPortalIndex }),
    update: t.field({ type: GhostRecordUpdateWithoutPortalIndex }),
  }),
});
