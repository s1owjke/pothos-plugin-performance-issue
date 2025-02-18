import { builder } from "src/builder";

import { BananaQueueCreateWithoutSingularityReport } from "./createWithoutSingularityReport";
import { BananaQueueWhereUnique } from "./whereUnique";

export const BananaQueueUpdateRelationListWithoutSingularityReport = builder
  .inputRef<any>("BananaQueueUpdateRelationListWithoutSingularityReport")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [BananaQueueWhereUnique] }),
      set: t.field({ type: [BananaQueueWhereUnique] }),
      disconnect: t.field({ type: [BananaQueueWhereUnique] }),
      create: t.field({ type: [BananaQueueCreateWithoutSingularityReport] }),
    }),
  });
