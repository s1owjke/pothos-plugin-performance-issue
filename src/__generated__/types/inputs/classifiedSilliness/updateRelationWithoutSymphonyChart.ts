import { builder } from "src/builder";

import { ClassifiedSillinessCreateWithoutSymphonyChart } from "./createWithoutSymphonyChart";
import { ClassifiedSillinessUpdateWithoutSymphonyChart } from "./updateWithoutSymphonyChart";
import { ClassifiedSillinessWhereUnique } from "./whereUnique";

export const ClassifiedSillinessUpdateRelationWithoutSymphonyChart = builder
  .inputRef<any>("ClassifiedSillinessUpdateRelationWithoutSymphonyChart")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ClassifiedSillinessWhereUnique }),
      disconnect: t.field({ type: ClassifiedSillinessWhereUnique }),
      create: t.field({ type: ClassifiedSillinessCreateWithoutSymphonyChart }),
      update: t.field({ type: ClassifiedSillinessUpdateWithoutSymphonyChart }),
    }),
  });
