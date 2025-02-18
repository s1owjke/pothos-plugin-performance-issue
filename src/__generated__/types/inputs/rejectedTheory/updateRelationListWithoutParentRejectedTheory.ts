import { builder } from "src/builder";

import { RejectedTheoryCreateWithoutParentRejectedTheory } from "./createWithoutParentRejectedTheory";
import { RejectedTheoryWhereUnique } from "./whereUnique";

export const RejectedTheoryUpdateRelationListWithoutParentRejectedTheory = builder
  .inputRef<any>("RejectedTheoryUpdateRelationListWithoutParentRejectedTheory")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [RejectedTheoryWhereUnique] }),
      set: t.field({ type: [RejectedTheoryWhereUnique] }),
      disconnect: t.field({ type: [RejectedTheoryWhereUnique] }),
      create: t.field({ type: [RejectedTheoryCreateWithoutParentRejectedTheory] }),
    }),
  });
