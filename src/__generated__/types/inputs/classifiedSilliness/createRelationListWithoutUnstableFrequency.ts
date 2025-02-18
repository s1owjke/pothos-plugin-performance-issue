import { builder } from "src/builder";

import { ClassifiedSillinessCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { ClassifiedSillinessWhereUnique } from "./whereUnique";

export const ClassifiedSillinessCreateRelationListWithoutUnstableFrequency = builder
  .inputRef<any>("ClassifiedSillinessCreateRelationListWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ClassifiedSillinessWhereUnique] }),
      create: t.field({ type: [ClassifiedSillinessCreateWithoutUnstableFrequency] }),
    }),
  });
