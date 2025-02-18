import { builder } from "src/builder";

import { RejectedTheoryCreateWithoutGhostRecord } from "./createWithoutGhostRecord";
import { RejectedTheoryWhereUnique } from "./whereUnique";

export const RejectedTheoryCreateRelationListWithoutGhostRecord = builder
  .inputRef<any>("RejectedTheoryCreateRelationListWithoutGhostRecord")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [RejectedTheoryWhereUnique] }),
      create: t.field({ type: [RejectedTheoryCreateWithoutGhostRecord] }),
    }),
  });
