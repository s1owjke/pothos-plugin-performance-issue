import { builder } from "src/builder";

import { SingularityReportCreateWithoutBananaQueues } from "./createWithoutBananaQueues";
import { SingularityReportWhereUnique } from "./whereUnique";

export const SingularityReportCreateRelationListWithoutBananaQueues = builder
  .inputRef<any>("SingularityReportCreateRelationListWithoutBananaQueues")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SingularityReportWhereUnique] }),
      create: t.field({ type: [SingularityReportCreateWithoutBananaQueues] }),
    }),
  });
