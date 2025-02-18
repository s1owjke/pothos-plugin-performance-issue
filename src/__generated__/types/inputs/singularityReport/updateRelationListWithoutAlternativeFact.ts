import { builder } from "src/builder";

import { SingularityReportCreateWithoutAlternativeFact } from "./createWithoutAlternativeFact";
import { SingularityReportWhereUnique } from "./whereUnique";

export const SingularityReportUpdateRelationListWithoutAlternativeFact = builder
  .inputRef<any>("SingularityReportUpdateRelationListWithoutAlternativeFact")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SingularityReportWhereUnique] }),
      set: t.field({ type: [SingularityReportWhereUnique] }),
      disconnect: t.field({ type: [SingularityReportWhereUnique] }),
      create: t.field({ type: [SingularityReportCreateWithoutAlternativeFact] }),
    }),
  });
