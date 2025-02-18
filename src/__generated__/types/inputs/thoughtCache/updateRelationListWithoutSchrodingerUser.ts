import { builder } from "src/builder";

import { ThoughtCacheCreateWithoutSchrodingerUser } from "./createWithoutSchrodingerUser";
import { ThoughtCacheWhereUnique } from "./whereUnique";

export const ThoughtCacheUpdateRelationListWithoutSchrodingerUser = builder
  .inputRef<any>("ThoughtCacheUpdateRelationListWithoutSchrodingerUser")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ThoughtCacheWhereUnique] }),
      set: t.field({ type: [ThoughtCacheWhereUnique] }),
      disconnect: t.field({ type: [ThoughtCacheWhereUnique] }),
      create: t.field({ type: [ThoughtCacheCreateWithoutSchrodingerUser] }),
    }),
  });
