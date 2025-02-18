import { builder } from "src/builder";

import { SingularityReportCreateWithoutBananaQueues } from "./createWithoutBananaQueues";
import { SingularityReportWhereUnique } from "./whereUnique";

export const SingularityReportUpdateRelationListWithoutBananaQueues = builder
  .inputRef<any>("SingularityReportUpdateRelationListWithoutBananaQueues")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SingularityReportWhereUnique] }),
      set: t.field({ type: [SingularityReportWhereUnique] }),
      disconnect: t.field({ type: [SingularityReportWhereUnique] }),
      create: t.field({ type: [SingularityReportCreateWithoutBananaQueues] }),
    }),
  });
