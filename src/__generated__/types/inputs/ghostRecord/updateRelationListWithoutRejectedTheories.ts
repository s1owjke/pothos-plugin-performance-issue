import { builder } from "src/builder";

import { GhostRecordCreateWithoutRejectedTheories } from "./createWithoutRejectedTheories";
import { GhostRecordWhereUnique } from "./whereUnique";

export const GhostRecordUpdateRelationListWithoutRejectedTheories = builder
  .inputRef<any>("GhostRecordUpdateRelationListWithoutRejectedTheories")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GhostRecordWhereUnique] }),
      set: t.field({ type: [GhostRecordWhereUnique] }),
      disconnect: t.field({ type: [GhostRecordWhereUnique] }),
      create: t.field({ type: [GhostRecordCreateWithoutRejectedTheories] }),
    }),
  });
