import { builder } from "src/builder";

import { InfiniteScrollLogCreateWithoutSchrodingerUser } from "./createWithoutSchrodingerUser";
import { InfiniteScrollLogUpdateWithoutSchrodingerUser } from "./updateWithoutSchrodingerUser";
import { InfiniteScrollLogWhereUnique } from "./whereUnique";

export const InfiniteScrollLogUpdateRelationWithoutSchrodingerUser = builder
  .inputRef<any>("InfiniteScrollLogUpdateRelationWithoutSchrodingerUser")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: InfiniteScrollLogWhereUnique }),
      disconnect: t.field({ type: InfiniteScrollLogWhereUnique }),
      create: t.field({ type: InfiniteScrollLogCreateWithoutSchrodingerUser }),
      update: t.field({ type: InfiniteScrollLogUpdateWithoutSchrodingerUser }),
    }),
  });
