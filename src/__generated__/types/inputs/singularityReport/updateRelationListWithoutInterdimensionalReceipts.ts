import { builder } from "src/builder";

import { SingularityReportCreateWithoutInterdimensionalReceipts } from "./createWithoutInterdimensionalReceipts";
import { SingularityReportWhereUnique } from "./whereUnique";

export const SingularityReportUpdateRelationListWithoutInterdimensionalReceipts = builder
  .inputRef<any>("SingularityReportUpdateRelationListWithoutInterdimensionalReceipts")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SingularityReportWhereUnique] }),
      set: t.field({ type: [SingularityReportWhereUnique] }),
      disconnect: t.field({ type: [SingularityReportWhereUnique] }),
      create: t.field({ type: [SingularityReportCreateWithoutInterdimensionalReceipts] }),
    }),
  });
