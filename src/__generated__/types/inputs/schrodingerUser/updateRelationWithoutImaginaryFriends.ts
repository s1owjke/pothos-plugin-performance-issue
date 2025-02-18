import { builder } from "src/builder";

import { SchrodingerUserCreateWithoutImaginaryFriends } from "./createWithoutImaginaryFriends";
import { SchrodingerUserUpdateWithoutImaginaryFriends } from "./updateWithoutImaginaryFriends";
import { SchrodingerUserWhereUnique } from "./whereUnique";

export const SchrodingerUserUpdateRelationWithoutImaginaryFriends = builder
  .inputRef<any>("SchrodingerUserUpdateRelationWithoutImaginaryFriends")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SchrodingerUserWhereUnique }),
      disconnect: t.field({ type: SchrodingerUserWhereUnique }),
      create: t.field({ type: SchrodingerUserCreateWithoutImaginaryFriends }),
      update: t.field({ type: SchrodingerUserUpdateWithoutImaginaryFriends }),
    }),
  });
