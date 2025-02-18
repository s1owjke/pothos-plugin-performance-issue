import { builder } from "src/builder";

import { ClassifiedSillinessCreateWithoutPortalIndex } from "./createWithoutPortalIndex";
import { ClassifiedSillinessWhereUnique } from "./whereUnique";

export const ClassifiedSillinessCreateRelationListWithoutPortalIndex = builder
  .inputRef<any>("ClassifiedSillinessCreateRelationListWithoutPortalIndex")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ClassifiedSillinessWhereUnique] }),
      create: t.field({ type: [ClassifiedSillinessCreateWithoutPortalIndex] }),
    }),
  });
