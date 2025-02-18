import { builder } from "src/builder";

import { RejectedTheoryCreateWithoutChildRejectedTheories } from "./createWithoutChildRejectedTheories";
import { RejectedTheoryUpdateWithoutChildRejectedTheories } from "./updateWithoutChildRejectedTheories";
import { RejectedTheoryWhereUnique } from "./whereUnique";

export const RejectedTheoryUpdateRelationWithoutChildRejectedTheories = builder
  .inputRef<any>("RejectedTheoryUpdateRelationWithoutChildRejectedTheories")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: RejectedTheoryWhereUnique }),
      disconnect: t.field({ type: RejectedTheoryWhereUnique }),
      create: t.field({ type: RejectedTheoryCreateWithoutChildRejectedTheories }),
      update: t.field({ type: RejectedTheoryUpdateWithoutChildRejectedTheories }),
    }),
  });
