import { builder } from "src/builder";

import { GhostRecordCreateWithoutRejectedTheories } from "./createWithoutRejectedTheories";
import { GhostRecordUpdateWithoutRejectedTheories } from "./updateWithoutRejectedTheories";
import { GhostRecordWhereUnique } from "./whereUnique";

export const GhostRecordUpdateRelationWithoutRejectedTheories = builder.inputRef<any>("GhostRecordUpdateRelationWithoutRejectedTheories").implement({
  fields: (t) => ({
    connect: t.field({ type: GhostRecordWhereUnique }),
    disconnect: t.field({ type: GhostRecordWhereUnique }),
    create: t.field({ type: GhostRecordCreateWithoutRejectedTheories }),
    update: t.field({ type: GhostRecordUpdateWithoutRejectedTheories }),
  }),
});
