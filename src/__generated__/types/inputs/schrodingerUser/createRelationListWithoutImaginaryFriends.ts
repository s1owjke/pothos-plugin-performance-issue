import { builder } from "src/builder";

import { SchrodingerUserCreateWithoutImaginaryFriends } from "./createWithoutImaginaryFriends";
import { SchrodingerUserWhereUnique } from "./whereUnique";

export const SchrodingerUserCreateRelationListWithoutImaginaryFriends = builder
  .inputRef<any>("SchrodingerUserCreateRelationListWithoutImaginaryFriends")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SchrodingerUserWhereUnique] }),
      create: t.field({ type: [SchrodingerUserCreateWithoutImaginaryFriends] }),
    }),
  });
