import { builder } from "src/builder";

import { ClassifiedSillinessCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { ClassifiedSillinessUpdateWithoutUnstableFrequency } from "./updateWithoutUnstableFrequency";
import { ClassifiedSillinessWhereUnique } from "./whereUnique";

export const ClassifiedSillinessUpdateRelationWithoutUnstableFrequency = builder
  .inputRef<any>("ClassifiedSillinessUpdateRelationWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ClassifiedSillinessWhereUnique }),
      disconnect: t.field({ type: ClassifiedSillinessWhereUnique }),
      create: t.field({ type: ClassifiedSillinessCreateWithoutUnstableFrequency }),
      update: t.field({ type: ClassifiedSillinessUpdateWithoutUnstableFrequency }),
    }),
  });
