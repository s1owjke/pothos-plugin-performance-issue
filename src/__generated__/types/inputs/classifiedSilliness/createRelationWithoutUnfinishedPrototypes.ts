import { builder } from "src/builder";

import { ClassifiedSillinessCreateWithoutUnfinishedPrototypes } from "./createWithoutUnfinishedPrototypes";
import { ClassifiedSillinessWhereUnique } from "./whereUnique";

export const ClassifiedSillinessCreateRelationWithoutUnfinishedPrototypes = builder
  .inputRef<any>("ClassifiedSillinessCreateRelationWithoutUnfinishedPrototypes")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ClassifiedSillinessWhereUnique }),
      create: t.field({ type: ClassifiedSillinessCreateWithoutUnfinishedPrototypes }),
    }),
  });
