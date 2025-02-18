import { builder } from "src/builder";

import { RecursiveRecursionCreateWithoutGravityOverride } from "./createWithoutGravityOverride";
import { RecursiveRecursionUpdateWithoutGravityOverride } from "./updateWithoutGravityOverride";
import { RecursiveRecursionWhereUnique } from "./whereUnique";

export const RecursiveRecursionUpdateRelationWithoutGravityOverride = builder
  .inputRef<any>("RecursiveRecursionUpdateRelationWithoutGravityOverride")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: RecursiveRecursionWhereUnique }),
      disconnect: t.field({ type: RecursiveRecursionWhereUnique }),
      create: t.field({ type: RecursiveRecursionCreateWithoutGravityOverride }),
      update: t.field({ type: RecursiveRecursionUpdateWithoutGravityOverride }),
    }),
  });
