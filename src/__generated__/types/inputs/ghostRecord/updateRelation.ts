import { builder } from "src/builder";

import { GhostRecordCreate } from "./create";
import { GhostRecordUpdate } from "./update";
import { GhostRecordWhereUnique } from "./whereUnique";

export const GhostRecordUpdateRelation = builder.inputRef<any>("GhostRecordUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: GhostRecordWhereUnique }),
    disconnect: t.field({ type: GhostRecordWhereUnique }),
    create: t.field({ type: GhostRecordCreate }),
    update: t.field({ type: GhostRecordUpdate }),
  }),
});
