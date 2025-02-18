import { builder } from "src/builder";

import { RejectedTheoryCreateWithoutPortalIndexes } from "./createWithoutPortalIndexes";
import { RejectedTheoryWhereUnique } from "./whereUnique";

export const RejectedTheoryCreateRelationListWithoutPortalIndexes = builder
  .inputRef<any>("RejectedTheoryCreateRelationListWithoutPortalIndexes")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [RejectedTheoryWhereUnique] }),
      create: t.field({ type: [RejectedTheoryCreateWithoutPortalIndexes] }),
    }),
  });
