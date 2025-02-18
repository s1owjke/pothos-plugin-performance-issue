import { builder } from "src/builder";

import { GhostRecordCreateWithoutSymphonyChart } from "./createWithoutSymphonyChart";
import { GhostRecordWhereUnique } from "./whereUnique";

export const GhostRecordUpdateRelationListWithoutSymphonyChart = builder
  .inputRef<any>("GhostRecordUpdateRelationListWithoutSymphonyChart")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GhostRecordWhereUnique] }),
      set: t.field({ type: [GhostRecordWhereUnique] }),
      disconnect: t.field({ type: [GhostRecordWhereUnique] }),
      create: t.field({ type: [GhostRecordCreateWithoutSymphonyChart] }),
    }),
  });
