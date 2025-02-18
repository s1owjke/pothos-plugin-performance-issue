import { builder } from "src/builder";

import { SingularityReportCreateWithoutBananaQueues } from "./createWithoutBananaQueues";
import { SingularityReportWhereUnique } from "./whereUnique";

export const SingularityReportCreateRelationWithoutBananaQueues = builder
  .inputRef<any>("SingularityReportCreateRelationWithoutBananaQueues")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SingularityReportWhereUnique }),
      create: t.field({ type: SingularityReportCreateWithoutBananaQueues }),
    }),
  });
