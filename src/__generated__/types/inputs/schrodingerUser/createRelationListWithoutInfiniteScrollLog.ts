import { builder } from "src/builder";

import { SchrodingerUserCreateWithoutInfiniteScrollLog } from "./createWithoutInfiniteScrollLog";
import { SchrodingerUserWhereUnique } from "./whereUnique";

export const SchrodingerUserCreateRelationListWithoutInfiniteScrollLog = builder
  .inputRef<any>("SchrodingerUserCreateRelationListWithoutInfiniteScrollLog")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SchrodingerUserWhereUnique] }),
      create: t.field({ type: [SchrodingerUserCreateWithoutInfiniteScrollLog] }),
    }),
  });
