import { builder } from "src/builder";

import { AlternativeFactCreateWithoutSingularityReport } from "./createWithoutSingularityReport";
import { AlternativeFactWhereUnique } from "./whereUnique";

export const AlternativeFactUpdateRelationListWithoutSingularityReport = builder
  .inputRef<any>("AlternativeFactUpdateRelationListWithoutSingularityReport")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [AlternativeFactWhereUnique] }),
      set: t.field({ type: [AlternativeFactWhereUnique] }),
      disconnect: t.field({ type: [AlternativeFactWhereUnique] }),
      create: t.field({ type: [AlternativeFactCreateWithoutSingularityReport] }),
    }),
  });
