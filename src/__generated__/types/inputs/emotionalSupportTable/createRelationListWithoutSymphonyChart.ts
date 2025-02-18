import { builder } from "src/builder";

import { EmotionalSupportTableCreateWithoutSymphonyChart } from "./createWithoutSymphonyChart";
import { EmotionalSupportTableWhereUnique } from "./whereUnique";

export const EmotionalSupportTableCreateRelationListWithoutSymphonyChart = builder
  .inputRef<any>("EmotionalSupportTableCreateRelationListWithoutSymphonyChart")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [EmotionalSupportTableWhereUnique] }),
      create: t.field({ type: [EmotionalSupportTableCreateWithoutSymphonyChart] }),
    }),
  });
