import { builder } from "src/builder";

import { ClassifiedSillinessCreateWithoutGhostRecord } from "./createWithoutGhostRecord";
import { ClassifiedSillinessUpdateWithoutGhostRecord } from "./updateWithoutGhostRecord";
import { ClassifiedSillinessWhereUnique } from "./whereUnique";

export const ClassifiedSillinessUpdateRelationWithoutGhostRecord = builder
  .inputRef<any>("ClassifiedSillinessUpdateRelationWithoutGhostRecord")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ClassifiedSillinessWhereUnique }),
      disconnect: t.field({ type: ClassifiedSillinessWhereUnique }),
      create: t.field({ type: ClassifiedSillinessCreateWithoutGhostRecord }),
      update: t.field({ type: ClassifiedSillinessUpdateWithoutGhostRecord }),
    }),
  });
