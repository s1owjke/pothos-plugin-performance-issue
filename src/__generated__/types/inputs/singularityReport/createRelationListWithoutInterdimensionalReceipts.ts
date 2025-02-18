import { builder } from "src/builder";

import { SingularityReportCreateWithoutInterdimensionalReceipts } from "./createWithoutInterdimensionalReceipts";
import { SingularityReportWhereUnique } from "./whereUnique";

export const SingularityReportCreateRelationListWithoutInterdimensionalReceipts = builder
  .inputRef<any>("SingularityReportCreateRelationListWithoutInterdimensionalReceipts")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SingularityReportWhereUnique] }),
      create: t.field({ type: [SingularityReportCreateWithoutInterdimensionalReceipts] }),
    }),
  });
