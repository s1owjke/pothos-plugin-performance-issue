import { builder } from "src/builder";

import { SchrodingerUserCreateWithoutImaginaryFriends } from "./createWithoutImaginaryFriends";
import { SchrodingerUserWhereUnique } from "./whereUnique";

export const SchrodingerUserUpdateRelationListWithoutImaginaryFriends = builder
  .inputRef<any>("SchrodingerUserUpdateRelationListWithoutImaginaryFriends")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SchrodingerUserWhereUnique] }),
      set: t.field({ type: [SchrodingerUserWhereUnique] }),
      disconnect: t.field({ type: [SchrodingerUserWhereUnique] }),
      create: t.field({ type: [SchrodingerUserCreateWithoutImaginaryFriends] }),
    }),
  });
