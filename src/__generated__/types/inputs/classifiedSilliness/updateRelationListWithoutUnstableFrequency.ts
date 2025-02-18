import { builder } from "src/builder";

import { ClassifiedSillinessCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { ClassifiedSillinessWhereUnique } from "./whereUnique";

export const ClassifiedSillinessUpdateRelationListWithoutUnstableFrequency = builder
  .inputRef<any>("ClassifiedSillinessUpdateRelationListWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ClassifiedSillinessWhereUnique] }),
      set: t.field({ type: [ClassifiedSillinessWhereUnique] }),
      disconnect: t.field({ type: [ClassifiedSillinessWhereUnique] }),
      create: t.field({ type: [ClassifiedSillinessCreateWithoutUnstableFrequency] }),
    }),
  });
