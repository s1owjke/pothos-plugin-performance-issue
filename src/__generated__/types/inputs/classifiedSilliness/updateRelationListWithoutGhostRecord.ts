import { builder } from "src/builder";

import { ClassifiedSillinessCreateWithoutGhostRecord } from "./createWithoutGhostRecord";
import { ClassifiedSillinessWhereUnique } from "./whereUnique";

export const ClassifiedSillinessUpdateRelationListWithoutGhostRecord = builder
  .inputRef<any>("ClassifiedSillinessUpdateRelationListWithoutGhostRecord")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ClassifiedSillinessWhereUnique] }),
      set: t.field({ type: [ClassifiedSillinessWhereUnique] }),
      disconnect: t.field({ type: [ClassifiedSillinessWhereUnique] }),
      create: t.field({ type: [ClassifiedSillinessCreateWithoutGhostRecord] }),
    }),
  });
