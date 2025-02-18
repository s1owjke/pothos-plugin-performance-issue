import { builder } from "src/builder";

import { InfiniteScrollLogCreateWithoutSchrodingerUser } from "./createWithoutSchrodingerUser";
import { InfiniteScrollLogWhereUnique } from "./whereUnique";

export const InfiniteScrollLogUpdateRelationListWithoutSchrodingerUser = builder
  .inputRef<any>("InfiniteScrollLogUpdateRelationListWithoutSchrodingerUser")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [InfiniteScrollLogWhereUnique] }),
      set: t.field({ type: [InfiniteScrollLogWhereUnique] }),
      disconnect: t.field({ type: [InfiniteScrollLogWhereUnique] }),
      create: t.field({ type: [InfiniteScrollLogCreateWithoutSchrodingerUser] }),
    }),
  });
