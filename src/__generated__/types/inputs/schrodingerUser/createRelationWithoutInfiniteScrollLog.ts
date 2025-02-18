import { builder } from "src/builder";

import { SchrodingerUserCreateWithoutInfiniteScrollLog } from "./createWithoutInfiniteScrollLog";
import { SchrodingerUserWhereUnique } from "./whereUnique";

export const SchrodingerUserCreateRelationWithoutInfiniteScrollLog = builder
  .inputRef<any>("SchrodingerUserCreateRelationWithoutInfiniteScrollLog")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SchrodingerUserWhereUnique }),
      create: t.field({ type: SchrodingerUserCreateWithoutInfiniteScrollLog }),
    }),
  });
