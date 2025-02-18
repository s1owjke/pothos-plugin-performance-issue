import { builder } from "src/builder";

import { ClassifiedSillinessCreateWithoutPortalIndex } from "./createWithoutPortalIndex";
import { ClassifiedSillinessWhereUnique } from "./whereUnique";

export const ClassifiedSillinessUpdateRelationListWithoutPortalIndex = builder
  .inputRef<any>("ClassifiedSillinessUpdateRelationListWithoutPortalIndex")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ClassifiedSillinessWhereUnique] }),
      set: t.field({ type: [ClassifiedSillinessWhereUnique] }),
      disconnect: t.field({ type: [ClassifiedSillinessWhereUnique] }),
      create: t.field({ type: [ClassifiedSillinessCreateWithoutPortalIndex] }),
    }),
  });
