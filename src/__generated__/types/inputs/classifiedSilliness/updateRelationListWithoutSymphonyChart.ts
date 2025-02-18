import { builder } from "src/builder";

import { ClassifiedSillinessCreateWithoutSymphonyChart } from "./createWithoutSymphonyChart";
import { ClassifiedSillinessWhereUnique } from "./whereUnique";

export const ClassifiedSillinessUpdateRelationListWithoutSymphonyChart = builder
  .inputRef<any>("ClassifiedSillinessUpdateRelationListWithoutSymphonyChart")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ClassifiedSillinessWhereUnique] }),
      set: t.field({ type: [ClassifiedSillinessWhereUnique] }),
      disconnect: t.field({ type: [ClassifiedSillinessWhereUnique] }),
      create: t.field({ type: [ClassifiedSillinessCreateWithoutSymphonyChart] }),
    }),
  });
