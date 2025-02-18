import { builder } from "src/builder";

import { SchrodingerUserCreateWithoutInfiniteScrollLog } from "./createWithoutInfiniteScrollLog";
import { SchrodingerUserWhereUnique } from "./whereUnique";

export const SchrodingerUserUpdateRelationListWithoutInfiniteScrollLog = builder
  .inputRef<any>("SchrodingerUserUpdateRelationListWithoutInfiniteScrollLog")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SchrodingerUserWhereUnique] }),
      set: t.field({ type: [SchrodingerUserWhereUnique] }),
      disconnect: t.field({ type: [SchrodingerUserWhereUnique] }),
      create: t.field({ type: [SchrodingerUserCreateWithoutInfiniteScrollLog] }),
    }),
  });
