import { builder } from "src/builder";

import { SingularityReportCreateWithoutEmotionalSupportTable } from "./createWithoutEmotionalSupportTable";
import { SingularityReportWhereUnique } from "./whereUnique";

export const SingularityReportUpdateRelationListWithoutEmotionalSupportTable = builder
  .inputRef<any>("SingularityReportUpdateRelationListWithoutEmotionalSupportTable")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SingularityReportWhereUnique] }),
      set: t.field({ type: [SingularityReportWhereUnique] }),
      disconnect: t.field({ type: [SingularityReportWhereUnique] }),
      create: t.field({ type: [SingularityReportCreateWithoutEmotionalSupportTable] }),
    }),
  });
