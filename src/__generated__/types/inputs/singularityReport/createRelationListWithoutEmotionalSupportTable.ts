import { builder } from "src/builder";

import { SingularityReportCreateWithoutEmotionalSupportTable } from "./createWithoutEmotionalSupportTable";
import { SingularityReportWhereUnique } from "./whereUnique";

export const SingularityReportCreateRelationListWithoutEmotionalSupportTable = builder
  .inputRef<any>("SingularityReportCreateRelationListWithoutEmotionalSupportTable")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SingularityReportWhereUnique] }),
      create: t.field({ type: [SingularityReportCreateWithoutEmotionalSupportTable] }),
    }),
  });
