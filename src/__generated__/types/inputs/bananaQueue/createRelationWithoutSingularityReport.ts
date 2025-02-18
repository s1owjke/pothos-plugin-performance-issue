import { builder } from "src/builder";

import { BananaQueueCreateWithoutSingularityReport } from "./createWithoutSingularityReport";
import { BananaQueueWhereUnique } from "./whereUnique";

export const BananaQueueCreateRelationWithoutSingularityReport = builder
  .inputRef<any>("BananaQueueCreateRelationWithoutSingularityReport")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: BananaQueueWhereUnique }),
      create: t.field({ type: BananaQueueCreateWithoutSingularityReport }),
    }),
  });
