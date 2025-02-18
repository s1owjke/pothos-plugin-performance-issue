import { builder } from "src/builder";

import { RejectedTheoryCreateWithoutChildRejectedTheories } from "./createWithoutChildRejectedTheories";
import { RejectedTheoryWhereUnique } from "./whereUnique";

export const RejectedTheoryUpdateRelationListWithoutChildRejectedTheories = builder
  .inputRef<any>("RejectedTheoryUpdateRelationListWithoutChildRejectedTheories")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [RejectedTheoryWhereUnique] }),
      set: t.field({ type: [RejectedTheoryWhereUnique] }),
      disconnect: t.field({ type: [RejectedTheoryWhereUnique] }),
      create: t.field({ type: [RejectedTheoryCreateWithoutChildRejectedTheories] }),
    }),
  });
