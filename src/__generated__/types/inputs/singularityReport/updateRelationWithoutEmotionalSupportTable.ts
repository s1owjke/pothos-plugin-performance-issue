import { builder } from "src/builder";

import { SingularityReportCreateWithoutEmotionalSupportTable } from "./createWithoutEmotionalSupportTable";
import { SingularityReportUpdateWithoutEmotionalSupportTable } from "./updateWithoutEmotionalSupportTable";
import { SingularityReportWhereUnique } from "./whereUnique";

export const SingularityReportUpdateRelationWithoutEmotionalSupportTable = builder
  .inputRef<any>("SingularityReportUpdateRelationWithoutEmotionalSupportTable")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SingularityReportWhereUnique }),
      disconnect: t.field({ type: SingularityReportWhereUnique }),
      create: t.field({ type: SingularityReportCreateWithoutEmotionalSupportTable }),
      update: t.field({ type: SingularityReportUpdateWithoutEmotionalSupportTable }),
    }),
  });
