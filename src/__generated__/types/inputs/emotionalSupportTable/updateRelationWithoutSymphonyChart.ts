import { builder } from "src/builder";

import { EmotionalSupportTableCreateWithoutSymphonyChart } from "./createWithoutSymphonyChart";
import { EmotionalSupportTableUpdateWithoutSymphonyChart } from "./updateWithoutSymphonyChart";
import { EmotionalSupportTableWhereUnique } from "./whereUnique";

export const EmotionalSupportTableUpdateRelationWithoutSymphonyChart = builder
  .inputRef<any>("EmotionalSupportTableUpdateRelationWithoutSymphonyChart")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: EmotionalSupportTableWhereUnique }),
      disconnect: t.field({ type: EmotionalSupportTableWhereUnique }),
      create: t.field({ type: EmotionalSupportTableCreateWithoutSymphonyChart }),
      update: t.field({ type: EmotionalSupportTableUpdateWithoutSymphonyChart }),
    }),
  });
