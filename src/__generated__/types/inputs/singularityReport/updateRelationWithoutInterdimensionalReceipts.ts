import { builder } from "src/builder";

import { SingularityReportCreateWithoutInterdimensionalReceipts } from "./createWithoutInterdimensionalReceipts";
import { SingularityReportUpdateWithoutInterdimensionalReceipts } from "./updateWithoutInterdimensionalReceipts";
import { SingularityReportWhereUnique } from "./whereUnique";

export const SingularityReportUpdateRelationWithoutInterdimensionalReceipts = builder
  .inputRef<any>("SingularityReportUpdateRelationWithoutInterdimensionalReceipts")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SingularityReportWhereUnique }),
      disconnect: t.field({ type: SingularityReportWhereUnique }),
      create: t.field({ type: SingularityReportCreateWithoutInterdimensionalReceipts }),
      update: t.field({ type: SingularityReportUpdateWithoutInterdimensionalReceipts }),
    }),
  });
