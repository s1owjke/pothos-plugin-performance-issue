import { builder } from "src/builder";

import { RejectedTheoryCreateWithoutParentRejectedTheory } from "./createWithoutParentRejectedTheory";
import { RejectedTheoryWhereUnique } from "./whereUnique";

export const RejectedTheoryCreateRelationListWithoutParentRejectedTheory = builder
  .inputRef<any>("RejectedTheoryCreateRelationListWithoutParentRejectedTheory")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [RejectedTheoryWhereUnique] }),
      create: t.field({ type: [RejectedTheoryCreateWithoutParentRejectedTheory] }),
    }),
  });
