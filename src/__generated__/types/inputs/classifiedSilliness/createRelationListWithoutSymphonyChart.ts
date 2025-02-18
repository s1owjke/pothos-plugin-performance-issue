import { builder } from "src/builder";

import { ClassifiedSillinessCreateWithoutSymphonyChart } from "./createWithoutSymphonyChart";
import { ClassifiedSillinessWhereUnique } from "./whereUnique";

export const ClassifiedSillinessCreateRelationListWithoutSymphonyChart = builder
  .inputRef<any>("ClassifiedSillinessCreateRelationListWithoutSymphonyChart")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ClassifiedSillinessWhereUnique] }),
      create: t.field({ type: [ClassifiedSillinessCreateWithoutSymphonyChart] }),
    }),
  });
