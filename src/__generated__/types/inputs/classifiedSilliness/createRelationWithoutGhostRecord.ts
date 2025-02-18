import { builder } from "src/builder";

import { ClassifiedSillinessCreateWithoutGhostRecord } from "./createWithoutGhostRecord";
import { ClassifiedSillinessWhereUnique } from "./whereUnique";

export const ClassifiedSillinessCreateRelationWithoutGhostRecord = builder
  .inputRef<any>("ClassifiedSillinessCreateRelationWithoutGhostRecord")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ClassifiedSillinessWhereUnique }),
      create: t.field({ type: ClassifiedSillinessCreateWithoutGhostRecord }),
    }),
  });
