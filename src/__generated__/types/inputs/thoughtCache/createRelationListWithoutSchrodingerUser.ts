import { builder } from "src/builder";

import { ThoughtCacheCreateWithoutSchrodingerUser } from "./createWithoutSchrodingerUser";
import { ThoughtCacheWhereUnique } from "./whereUnique";

export const ThoughtCacheCreateRelationListWithoutSchrodingerUser = builder
  .inputRef<any>("ThoughtCacheCreateRelationListWithoutSchrodingerUser")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ThoughtCacheWhereUnique] }),
      create: t.field({ type: [ThoughtCacheCreateWithoutSchrodingerUser] }),
    }),
  });
