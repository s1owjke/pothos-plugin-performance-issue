import { builder } from "src/builder";

import { SchrodingerUserCreateWithoutThoughtCaches } from "./createWithoutThoughtCaches";
import { SchrodingerUserWhereUnique } from "./whereUnique";

export const SchrodingerUserCreateRelationListWithoutThoughtCaches = builder
  .inputRef<any>("SchrodingerUserCreateRelationListWithoutThoughtCaches")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SchrodingerUserWhereUnique] }),
      create: t.field({ type: [SchrodingerUserCreateWithoutThoughtCaches] }),
    }),
  });
