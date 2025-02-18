import { builder } from "src/builder";

import { ThoughtCacheCreateWithoutSchrodingerUser } from "./createWithoutSchrodingerUser";
import { ThoughtCacheUpdateWithoutSchrodingerUser } from "./updateWithoutSchrodingerUser";
import { ThoughtCacheWhereUnique } from "./whereUnique";

export const ThoughtCacheUpdateRelationWithoutSchrodingerUser = builder.inputRef<any>("ThoughtCacheUpdateRelationWithoutSchrodingerUser").implement({
  fields: (t) => ({
    connect: t.field({ type: ThoughtCacheWhereUnique }),
    disconnect: t.field({ type: ThoughtCacheWhereUnique }),
    create: t.field({ type: ThoughtCacheCreateWithoutSchrodingerUser }),
    update: t.field({ type: ThoughtCacheUpdateWithoutSchrodingerUser }),
  }),
});
