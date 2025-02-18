import { builder } from "src/builder";

import { InfiniteScrollLogCreateWithoutSchrodingerUser } from "./createWithoutSchrodingerUser";
import { InfiniteScrollLogWhereUnique } from "./whereUnique";

export const InfiniteScrollLogCreateRelationWithoutSchrodingerUser = builder
  .inputRef<any>("InfiniteScrollLogCreateRelationWithoutSchrodingerUser")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: InfiniteScrollLogWhereUnique }),
      create: t.field({ type: InfiniteScrollLogCreateWithoutSchrodingerUser }),
    }),
  });
