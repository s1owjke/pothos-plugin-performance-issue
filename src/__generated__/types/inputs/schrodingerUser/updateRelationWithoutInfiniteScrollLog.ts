import { builder } from "src/builder";

import { SchrodingerUserCreateWithoutInfiniteScrollLog } from "./createWithoutInfiniteScrollLog";
import { SchrodingerUserUpdateWithoutInfiniteScrollLog } from "./updateWithoutInfiniteScrollLog";
import { SchrodingerUserWhereUnique } from "./whereUnique";

export const SchrodingerUserUpdateRelationWithoutInfiniteScrollLog = builder
  .inputRef<any>("SchrodingerUserUpdateRelationWithoutInfiniteScrollLog")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SchrodingerUserWhereUnique }),
      disconnect: t.field({ type: SchrodingerUserWhereUnique }),
      create: t.field({ type: SchrodingerUserCreateWithoutInfiniteScrollLog }),
      update: t.field({ type: SchrodingerUserUpdateWithoutInfiniteScrollLog }),
    }),
  });
