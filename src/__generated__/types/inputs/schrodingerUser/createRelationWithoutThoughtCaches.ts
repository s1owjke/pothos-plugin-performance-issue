import { builder } from "src/builder";

import { SchrodingerUserCreateWithoutThoughtCaches } from "./createWithoutThoughtCaches";
import { SchrodingerUserWhereUnique } from "./whereUnique";

export const SchrodingerUserCreateRelationWithoutThoughtCaches = builder
  .inputRef<any>("SchrodingerUserCreateRelationWithoutThoughtCaches")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SchrodingerUserWhereUnique }),
      create: t.field({ type: SchrodingerUserCreateWithoutThoughtCaches }),
    }),
  });
