import { builder } from "src/builder";

import { ClassifiedSillinessCreateWithoutPortalIndex } from "./createWithoutPortalIndex";
import { ClassifiedSillinessUpdateWithoutPortalIndex } from "./updateWithoutPortalIndex";
import { ClassifiedSillinessWhereUnique } from "./whereUnique";

export const ClassifiedSillinessUpdateRelationWithoutPortalIndex = builder
  .inputRef<any>("ClassifiedSillinessUpdateRelationWithoutPortalIndex")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ClassifiedSillinessWhereUnique }),
      disconnect: t.field({ type: ClassifiedSillinessWhereUnique }),
      create: t.field({ type: ClassifiedSillinessCreateWithoutPortalIndex }),
      update: t.field({ type: ClassifiedSillinessUpdateWithoutPortalIndex }),
    }),
  });
