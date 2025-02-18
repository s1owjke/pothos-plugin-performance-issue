import { builder } from "src/builder";

import { EmotionalSupportTableCreateWithoutSingularityReport } from "./createWithoutSingularityReport";
import { EmotionalSupportTableWhereUnique } from "./whereUnique";

export const EmotionalSupportTableCreateRelationWithoutSingularityReport = builder
  .inputRef<any>("EmotionalSupportTableCreateRelationWithoutSingularityReport")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: EmotionalSupportTableWhereUnique }),
      create: t.field({ type: EmotionalSupportTableCreateWithoutSingularityReport }),
    }),
  });
