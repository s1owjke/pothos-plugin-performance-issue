import { builder } from "src/builder";

import { SchrodingerUserCreateWithoutThoughtCaches } from "./createWithoutThoughtCaches";
import { SchrodingerUserWhereUnique } from "./whereUnique";

export const SchrodingerUserUpdateRelationListWithoutThoughtCaches = builder
  .inputRef<any>("SchrodingerUserUpdateRelationListWithoutThoughtCaches")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SchrodingerUserWhereUnique] }),
      set: t.field({ type: [SchrodingerUserWhereUnique] }),
      disconnect: t.field({ type: [SchrodingerUserWhereUnique] }),
      create: t.field({ type: [SchrodingerUserCreateWithoutThoughtCaches] }),
    }),
  });
