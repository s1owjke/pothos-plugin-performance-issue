import { builder } from "src/builder";

import { RejectedTheoryCreateWithoutParentRejectedTheory } from "./createWithoutParentRejectedTheory";
import { RejectedTheoryUpdateWithoutParentRejectedTheory } from "./updateWithoutParentRejectedTheory";
import { RejectedTheoryWhereUnique } from "./whereUnique";

export const RejectedTheoryUpdateRelationWithoutParentRejectedTheory = builder
  .inputRef<any>("RejectedTheoryUpdateRelationWithoutParentRejectedTheory")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: RejectedTheoryWhereUnique }),
      disconnect: t.field({ type: RejectedTheoryWhereUnique }),
      create: t.field({ type: RejectedTheoryCreateWithoutParentRejectedTheory }),
      update: t.field({ type: RejectedTheoryUpdateWithoutParentRejectedTheory }),
    }),
  });
