import { builder } from "src/builder";

import { ClassifiedSillinessCreateWithoutUnfinishedPrototypes } from "./createWithoutUnfinishedPrototypes";
import { ClassifiedSillinessWhereUnique } from "./whereUnique";

export const ClassifiedSillinessUpdateRelationListWithoutUnfinishedPrototypes = builder
  .inputRef<any>("ClassifiedSillinessUpdateRelationListWithoutUnfinishedPrototypes")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ClassifiedSillinessWhereUnique] }),
      set: t.field({ type: [ClassifiedSillinessWhereUnique] }),
      disconnect: t.field({ type: [ClassifiedSillinessWhereUnique] }),
      create: t.field({ type: [ClassifiedSillinessCreateWithoutUnfinishedPrototypes] }),
    }),
  });
