import { builder } from "src/builder";

import { BananaQueueCreateWithoutSingularityReport } from "./createWithoutSingularityReport";
import { BananaQueueUpdateWithoutSingularityReport } from "./updateWithoutSingularityReport";
import { BananaQueueWhereUnique } from "./whereUnique";

export const BananaQueueUpdateRelationWithoutSingularityReport = builder
  .inputRef<any>("BananaQueueUpdateRelationWithoutSingularityReport")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: BananaQueueWhereUnique }),
      disconnect: t.field({ type: BananaQueueWhereUnique }),
      create: t.field({ type: BananaQueueCreateWithoutSingularityReport }),
      update: t.field({ type: BananaQueueUpdateWithoutSingularityReport }),
    }),
  });
