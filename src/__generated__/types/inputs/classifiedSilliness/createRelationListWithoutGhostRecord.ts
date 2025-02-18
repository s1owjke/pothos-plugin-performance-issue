import { builder } from "src/builder";

import { ClassifiedSillinessCreateWithoutGhostRecord } from "./createWithoutGhostRecord";
import { ClassifiedSillinessWhereUnique } from "./whereUnique";

export const ClassifiedSillinessCreateRelationListWithoutGhostRecord = builder
  .inputRef<any>("ClassifiedSillinessCreateRelationListWithoutGhostRecord")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ClassifiedSillinessWhereUnique] }),
      create: t.field({ type: [ClassifiedSillinessCreateWithoutGhostRecord] }),
    }),
  });
