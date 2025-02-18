import { builder } from "src/builder";

import { SingularityReportCreateWithoutBananaQueues } from "./createWithoutBananaQueues";
import { SingularityReportUpdateWithoutBananaQueues } from "./updateWithoutBananaQueues";
import { SingularityReportWhereUnique } from "./whereUnique";

export const SingularityReportUpdateRelationWithoutBananaQueues = builder
  .inputRef<any>("SingularityReportUpdateRelationWithoutBananaQueues")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SingularityReportWhereUnique }),
      disconnect: t.field({ type: SingularityReportWhereUnique }),
      create: t.field({ type: SingularityReportCreateWithoutBananaQueues }),
      update: t.field({ type: SingularityReportUpdateWithoutBananaQueues }),
    }),
  });
