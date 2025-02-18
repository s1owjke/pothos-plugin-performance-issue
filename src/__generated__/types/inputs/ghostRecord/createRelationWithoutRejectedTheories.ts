import { builder } from "src/builder";

import { GhostRecordCreateWithoutRejectedTheories } from "./createWithoutRejectedTheories";
import { GhostRecordWhereUnique } from "./whereUnique";

export const GhostRecordCreateRelationWithoutRejectedTheories = builder.inputRef<any>("GhostRecordCreateRelationWithoutRejectedTheories").implement({
  fields: (t) => ({
    connect: t.field({ type: GhostRecordWhereUnique }),
    create: t.field({ type: GhostRecordCreateWithoutRejectedTheories }),
  }),
});
