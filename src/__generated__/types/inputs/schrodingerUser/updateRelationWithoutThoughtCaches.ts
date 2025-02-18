import { builder } from "src/builder";

import { SchrodingerUserCreateWithoutThoughtCaches } from "./createWithoutThoughtCaches";
import { SchrodingerUserUpdateWithoutThoughtCaches } from "./updateWithoutThoughtCaches";
import { SchrodingerUserWhereUnique } from "./whereUnique";

export const SchrodingerUserUpdateRelationWithoutThoughtCaches = builder
  .inputRef<any>("SchrodingerUserUpdateRelationWithoutThoughtCaches")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SchrodingerUserWhereUnique }),
      disconnect: t.field({ type: SchrodingerUserWhereUnique }),
      create: t.field({ type: SchrodingerUserCreateWithoutThoughtCaches }),
      update: t.field({ type: SchrodingerUserUpdateWithoutThoughtCaches }),
    }),
  });
