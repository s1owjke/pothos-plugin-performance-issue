import { builder } from "src/builder";

import { RecursiveRecursionCreateWithoutGravityOverride } from "./createWithoutGravityOverride";
import { RecursiveRecursionWhereUnique } from "./whereUnique";

export const RecursiveRecursionUpdateRelationListWithoutGravityOverride = builder
  .inputRef<any>("RecursiveRecursionUpdateRelationListWithoutGravityOverride")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [RecursiveRecursionWhereUnique] }),
      set: t.field({ type: [RecursiveRecursionWhereUnique] }),
      disconnect: t.field({ type: [RecursiveRecursionWhereUnique] }),
      create: t.field({ type: [RecursiveRecursionCreateWithoutGravityOverride] }),
    }),
  });
