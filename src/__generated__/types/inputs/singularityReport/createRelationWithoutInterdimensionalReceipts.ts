import { builder } from "src/builder";

import { SingularityReportCreateWithoutInterdimensionalReceipts } from "./createWithoutInterdimensionalReceipts";
import { SingularityReportWhereUnique } from "./whereUnique";

export const SingularityReportCreateRelationWithoutInterdimensionalReceipts = builder
  .inputRef<any>("SingularityReportCreateRelationWithoutInterdimensionalReceipts")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SingularityReportWhereUnique }),
      create: t.field({ type: SingularityReportCreateWithoutInterdimensionalReceipts }),
    }),
  });
