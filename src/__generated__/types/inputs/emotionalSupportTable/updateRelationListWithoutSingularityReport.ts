import { builder } from "src/builder";

import { EmotionalSupportTableCreateWithoutSingularityReport } from "./createWithoutSingularityReport";
import { EmotionalSupportTableWhereUnique } from "./whereUnique";

export const EmotionalSupportTableUpdateRelationListWithoutSingularityReport = builder
  .inputRef<any>("EmotionalSupportTableUpdateRelationListWithoutSingularityReport")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [EmotionalSupportTableWhereUnique] }),
      set: t.field({ type: [EmotionalSupportTableWhereUnique] }),
      disconnect: t.field({ type: [EmotionalSupportTableWhereUnique] }),
      create: t.field({ type: [EmotionalSupportTableCreateWithoutSingularityReport] }),
    }),
  });
