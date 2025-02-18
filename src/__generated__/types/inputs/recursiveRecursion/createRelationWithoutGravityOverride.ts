import { builder } from "src/builder";

import { RecursiveRecursionCreateWithoutGravityOverride } from "./createWithoutGravityOverride";
import { RecursiveRecursionWhereUnique } from "./whereUnique";

export const RecursiveRecursionCreateRelationWithoutGravityOverride = builder
  .inputRef<any>("RecursiveRecursionCreateRelationWithoutGravityOverride")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: RecursiveRecursionWhereUnique }),
      create: t.field({ type: RecursiveRecursionCreateWithoutGravityOverride }),
    }),
  });
