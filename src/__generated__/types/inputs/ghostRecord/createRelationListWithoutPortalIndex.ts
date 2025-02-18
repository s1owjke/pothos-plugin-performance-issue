import { builder } from "src/builder";

import { GhostRecordCreateWithoutPortalIndex } from "./createWithoutPortalIndex";
import { GhostRecordWhereUnique } from "./whereUnique";

export const GhostRecordCreateRelationListWithoutPortalIndex = builder.inputRef<any>("GhostRecordCreateRelationListWithoutPortalIndex").implement({
  fields: (t) => ({
    connect: t.field({ type: [GhostRecordWhereUnique] }),
    create: t.field({ type: [GhostRecordCreateWithoutPortalIndex] }),
  }),
});
