import { builder } from "src/builder";

import { GhostRecordCreate } from "./create";
import { GhostRecordWhereUnique } from "./whereUnique";

export const GhostRecordCreateRelationList = builder.inputRef<any>("GhostRecordCreateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [GhostRecordWhereUnique] }),
    create: t.field({ type: [GhostRecordCreate] }),
  }),
});
