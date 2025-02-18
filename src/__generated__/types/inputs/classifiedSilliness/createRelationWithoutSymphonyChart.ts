import { builder } from "src/builder";

import { ClassifiedSillinessCreateWithoutSymphonyChart } from "./createWithoutSymphonyChart";
import { ClassifiedSillinessWhereUnique } from "./whereUnique";

export const ClassifiedSillinessCreateRelationWithoutSymphonyChart = builder
  .inputRef<any>("ClassifiedSillinessCreateRelationWithoutSymphonyChart")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ClassifiedSillinessWhereUnique }),
      create: t.field({ type: ClassifiedSillinessCreateWithoutSymphonyChart }),
    }),
  });
