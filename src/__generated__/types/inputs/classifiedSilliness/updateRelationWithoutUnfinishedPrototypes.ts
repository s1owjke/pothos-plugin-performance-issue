import { builder } from "src/builder";

import { ClassifiedSillinessCreateWithoutUnfinishedPrototypes } from "./createWithoutUnfinishedPrototypes";
import { ClassifiedSillinessUpdateWithoutUnfinishedPrototypes } from "./updateWithoutUnfinishedPrototypes";
import { ClassifiedSillinessWhereUnique } from "./whereUnique";

export const ClassifiedSillinessUpdateRelationWithoutUnfinishedPrototypes = builder
  .inputRef<any>("ClassifiedSillinessUpdateRelationWithoutUnfinishedPrototypes")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ClassifiedSillinessWhereUnique }),
      disconnect: t.field({ type: ClassifiedSillinessWhereUnique }),
      create: t.field({ type: ClassifiedSillinessCreateWithoutUnfinishedPrototypes }),
      update: t.field({ type: ClassifiedSillinessUpdateWithoutUnfinishedPrototypes }),
    }),
  });
