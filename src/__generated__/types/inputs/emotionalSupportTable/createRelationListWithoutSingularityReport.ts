import { builder } from "src/builder";

import { EmotionalSupportTableCreateWithoutSingularityReport } from "./createWithoutSingularityReport";
import { EmotionalSupportTableWhereUnique } from "./whereUnique";

export const EmotionalSupportTableCreateRelationListWithoutSingularityReport = builder
  .inputRef<any>("EmotionalSupportTableCreateRelationListWithoutSingularityReport")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [EmotionalSupportTableWhereUnique] }),
      create: t.field({ type: [EmotionalSupportTableCreateWithoutSingularityReport] }),
    }),
  });
