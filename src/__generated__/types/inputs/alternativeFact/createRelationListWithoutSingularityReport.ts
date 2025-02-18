import { builder } from "src/builder";

import { AlternativeFactCreateWithoutSingularityReport } from "./createWithoutSingularityReport";
import { AlternativeFactWhereUnique } from "./whereUnique";

export const AlternativeFactCreateRelationListWithoutSingularityReport = builder
  .inputRef<any>("AlternativeFactCreateRelationListWithoutSingularityReport")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [AlternativeFactWhereUnique] }),
      create: t.field({ type: [AlternativeFactCreateWithoutSingularityReport] }),
    }),
  });
