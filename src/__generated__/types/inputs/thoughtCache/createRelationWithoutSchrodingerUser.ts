import { builder } from "src/builder";

import { ThoughtCacheCreateWithoutSchrodingerUser } from "./createWithoutSchrodingerUser";
import { ThoughtCacheWhereUnique } from "./whereUnique";

export const ThoughtCacheCreateRelationWithoutSchrodingerUser = builder.inputRef<any>("ThoughtCacheCreateRelationWithoutSchrodingerUser").implement({
  fields: (t) => ({
    connect: t.field({ type: ThoughtCacheWhereUnique }),
    create: t.field({ type: ThoughtCacheCreateWithoutSchrodingerUser }),
  }),
});
