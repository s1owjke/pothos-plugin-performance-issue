import { builder } from "src/builder";

import { EmotionalSupportTableCreateWithoutSymphonyChart } from "./createWithoutSymphonyChart";
import { EmotionalSupportTableWhereUnique } from "./whereUnique";

export const EmotionalSupportTableUpdateRelationListWithoutSymphonyChart = builder
  .inputRef<any>("EmotionalSupportTableUpdateRelationListWithoutSymphonyChart")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [EmotionalSupportTableWhereUnique] }),
      set: t.field({ type: [EmotionalSupportTableWhereUnique] }),
      disconnect: t.field({ type: [EmotionalSupportTableWhereUnique] }),
      create: t.field({ type: [EmotionalSupportTableCreateWithoutSymphonyChart] }),
    }),
  });
