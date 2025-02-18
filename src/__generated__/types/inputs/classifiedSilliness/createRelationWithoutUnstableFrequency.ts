import { builder } from "src/builder";

import { ClassifiedSillinessCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { ClassifiedSillinessWhereUnique } from "./whereUnique";

export const ClassifiedSillinessCreateRelationWithoutUnstableFrequency = builder
  .inputRef<any>("ClassifiedSillinessCreateRelationWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ClassifiedSillinessWhereUnique }),
      create: t.field({ type: ClassifiedSillinessCreateWithoutUnstableFrequency }),
    }),
  });
