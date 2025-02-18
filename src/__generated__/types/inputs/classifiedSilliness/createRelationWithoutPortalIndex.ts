import { builder } from "src/builder";

import { ClassifiedSillinessCreateWithoutPortalIndex } from "./createWithoutPortalIndex";
import { ClassifiedSillinessWhereUnique } from "./whereUnique";

export const ClassifiedSillinessCreateRelationWithoutPortalIndex = builder
  .inputRef<any>("ClassifiedSillinessCreateRelationWithoutPortalIndex")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ClassifiedSillinessWhereUnique }),
      create: t.field({ type: ClassifiedSillinessCreateWithoutPortalIndex }),
    }),
  });
