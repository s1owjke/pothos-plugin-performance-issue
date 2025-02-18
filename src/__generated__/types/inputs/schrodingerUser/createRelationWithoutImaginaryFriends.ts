import { builder } from "src/builder";

import { SchrodingerUserCreateWithoutImaginaryFriends } from "./createWithoutImaginaryFriends";
import { SchrodingerUserWhereUnique } from "./whereUnique";

export const SchrodingerUserCreateRelationWithoutImaginaryFriends = builder
  .inputRef<any>("SchrodingerUserCreateRelationWithoutImaginaryFriends")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SchrodingerUserWhereUnique }),
      create: t.field({ type: SchrodingerUserCreateWithoutImaginaryFriends }),
    }),
  });
