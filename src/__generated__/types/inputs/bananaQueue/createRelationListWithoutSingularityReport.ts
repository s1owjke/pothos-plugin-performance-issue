import { builder } from "src/builder";

import { BananaQueueCreateWithoutSingularityReport } from "./createWithoutSingularityReport";
import { BananaQueueWhereUnique } from "./whereUnique";

export const BananaQueueCreateRelationListWithoutSingularityReport = builder
  .inputRef<any>("BananaQueueCreateRelationListWithoutSingularityReport")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [BananaQueueWhereUnique] }),
      create: t.field({ type: [BananaQueueCreateWithoutSingularityReport] }),
    }),
  });
