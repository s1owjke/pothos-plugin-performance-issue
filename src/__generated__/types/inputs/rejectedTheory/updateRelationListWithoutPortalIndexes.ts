import { builder } from "src/builder";

import { RejectedTheoryCreateWithoutPortalIndexes } from "./createWithoutPortalIndexes";
import { RejectedTheoryWhereUnique } from "./whereUnique";

export const RejectedTheoryUpdateRelationListWithoutPortalIndexes = builder
  .inputRef<any>("RejectedTheoryUpdateRelationListWithoutPortalIndexes")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [RejectedTheoryWhereUnique] }),
      set: t.field({ type: [RejectedTheoryWhereUnique] }),
      disconnect: t.field({ type: [RejectedTheoryWhereUnique] }),
      create: t.field({ type: [RejectedTheoryCreateWithoutPortalIndexes] }),
    }),
  });
