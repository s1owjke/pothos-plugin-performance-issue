import { builder } from "src/builder";

import { RejectedTheoryCreateWithoutGhostRecord } from "./createWithoutGhostRecord";
import { RejectedTheoryWhereUnique } from "./whereUnique";

export const RejectedTheoryUpdateRelationListWithoutGhostRecord = builder
  .inputRef<any>("RejectedTheoryUpdateRelationListWithoutGhostRecord")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [RejectedTheoryWhereUnique] }),
      set: t.field({ type: [RejectedTheoryWhereUnique] }),
      disconnect: t.field({ type: [RejectedTheoryWhereUnique] }),
      create: t.field({ type: [RejectedTheoryCreateWithoutGhostRecord] }),
    }),
  });
