import { builder } from "src/builder";

import { GhostRecordCreateWithoutRejectedTheories } from "./createWithoutRejectedTheories";
import { GhostRecordWhereUnique } from "./whereUnique";

export const GhostRecordCreateRelationListWithoutRejectedTheories = builder
  .inputRef<any>("GhostRecordCreateRelationListWithoutRejectedTheories")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GhostRecordWhereUnique] }),
      create: t.field({ type: [GhostRecordCreateWithoutRejectedTheories] }),
    }),
  });
