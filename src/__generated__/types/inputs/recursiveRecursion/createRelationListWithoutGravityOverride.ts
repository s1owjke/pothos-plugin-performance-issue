import { builder } from "src/builder";

import { RecursiveRecursionCreateWithoutGravityOverride } from "./createWithoutGravityOverride";
import { RecursiveRecursionWhereUnique } from "./whereUnique";

export const RecursiveRecursionCreateRelationListWithoutGravityOverride = builder
  .inputRef<any>("RecursiveRecursionCreateRelationListWithoutGravityOverride")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [RecursiveRecursionWhereUnique] }),
      create: t.field({ type: [RecursiveRecursionCreateWithoutGravityOverride] }),
    }),
  });
