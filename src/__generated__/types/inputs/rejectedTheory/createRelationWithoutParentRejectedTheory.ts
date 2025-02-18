import { builder } from "src/builder";

import { RejectedTheoryCreateWithoutParentRejectedTheory } from "./createWithoutParentRejectedTheory";
import { RejectedTheoryWhereUnique } from "./whereUnique";

export const RejectedTheoryCreateRelationWithoutParentRejectedTheory = builder
  .inputRef<any>("RejectedTheoryCreateRelationWithoutParentRejectedTheory")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: RejectedTheoryWhereUnique }),
      create: t.field({ type: RejectedTheoryCreateWithoutParentRejectedTheory }),
    }),
  });
