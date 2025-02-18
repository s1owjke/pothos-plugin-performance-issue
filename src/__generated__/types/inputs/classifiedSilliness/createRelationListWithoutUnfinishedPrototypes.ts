import { builder } from "src/builder";

import { ClassifiedSillinessCreateWithoutUnfinishedPrototypes } from "./createWithoutUnfinishedPrototypes";
import { ClassifiedSillinessWhereUnique } from "./whereUnique";

export const ClassifiedSillinessCreateRelationListWithoutUnfinishedPrototypes = builder
  .inputRef<any>("ClassifiedSillinessCreateRelationListWithoutUnfinishedPrototypes")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ClassifiedSillinessWhereUnique] }),
      create: t.field({ type: [ClassifiedSillinessCreateWithoutUnfinishedPrototypes] }),
    }),
  });
