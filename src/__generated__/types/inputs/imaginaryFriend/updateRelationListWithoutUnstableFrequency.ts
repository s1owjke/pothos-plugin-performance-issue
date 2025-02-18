import { builder } from "src/builder";

import { ImaginaryFriendCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { ImaginaryFriendWhereUnique } from "./whereUnique";

export const ImaginaryFriendUpdateRelationListWithoutUnstableFrequency = builder
  .inputRef<any>("ImaginaryFriendUpdateRelationListWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ImaginaryFriendWhereUnique] }),
      set: t.field({ type: [ImaginaryFriendWhereUnique] }),
      disconnect: t.field({ type: [ImaginaryFriendWhereUnique] }),
      create: t.field({ type: [ImaginaryFriendCreateWithoutUnstableFrequency] }),
    }),
  });
