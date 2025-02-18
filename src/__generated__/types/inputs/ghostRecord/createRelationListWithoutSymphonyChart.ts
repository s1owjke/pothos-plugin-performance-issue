import { builder } from "src/builder";

import { GhostRecordCreateWithoutSymphonyChart } from "./createWithoutSymphonyChart";
import { GhostRecordWhereUnique } from "./whereUnique";

export const GhostRecordCreateRelationListWithoutSymphonyChart = builder
  .inputRef<any>("GhostRecordCreateRelationListWithoutSymphonyChart")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GhostRecordWhereUnique] }),
      create: t.field({ type: [GhostRecordCreateWithoutSymphonyChart] }),
    }),
  });
