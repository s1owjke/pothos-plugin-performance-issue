import { builder } from "src/builder";

import { GhostRecordCreate } from "./create";
import { GhostRecordWhereUnique } from "./whereUnique";

export const GhostRecordUpdateRelationList = builder.inputRef<any>("GhostRecordUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [GhostRecordWhereUnique] }),
    set: t.field({ type: [GhostRecordWhereUnique] }),
    disconnect: t.field({ type: [GhostRecordWhereUnique] }),
    create: t.field({ type: [GhostRecordCreate] }),
  }),
});
