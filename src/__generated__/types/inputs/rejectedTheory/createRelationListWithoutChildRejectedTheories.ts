import { builder } from "src/builder";

import { RejectedTheoryCreateWithoutChildRejectedTheories } from "./createWithoutChildRejectedTheories";
import { RejectedTheoryWhereUnique } from "./whereUnique";

export const RejectedTheoryCreateRelationListWithoutChildRejectedTheories = builder
  .inputRef<any>("RejectedTheoryCreateRelationListWithoutChildRejectedTheories")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [RejectedTheoryWhereUnique] }),
      create: t.field({ type: [RejectedTheoryCreateWithoutChildRejectedTheories] }),
    }),
  });
