import { builder } from "src/builder";

import { EmotionalSupportTableCreateWithoutSingularityReport } from "./createWithoutSingularityReport";
import { EmotionalSupportTableUpdateWithoutSingularityReport } from "./updateWithoutSingularityReport";
import { EmotionalSupportTableWhereUnique } from "./whereUnique";

export const EmotionalSupportTableUpdateRelationWithoutSingularityReport = builder
  .inputRef<any>("EmotionalSupportTableUpdateRelationWithoutSingularityReport")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: EmotionalSupportTableWhereUnique }),
      disconnect: t.field({ type: EmotionalSupportTableWhereUnique }),
      create: t.field({ type: EmotionalSupportTableCreateWithoutSingularityReport }),
      update: t.field({ type: EmotionalSupportTableUpdateWithoutSingularityReport }),
    }),
  });
