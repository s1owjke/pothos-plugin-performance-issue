import { builder } from "src/builder";

import { ImaginaryFriendCreateWithoutUnstableFrequency2 } from "./createWithoutUnstableFrequency2";
import { ImaginaryFriendWhereUnique } from "./whereUnique";

export const ImaginaryFriendUpdateRelationListWithoutUnstableFrequency2 = builder
  .inputRef<any>("ImaginaryFriendUpdateRelationListWithoutUnstableFrequency2")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ImaginaryFriendWhereUnique] }),
      set: t.field({ type: [ImaginaryFriendWhereUnique] }),
      disconnect: t.field({ type: [ImaginaryFriendWhereUnique] }),
      create: t.field({ type: [ImaginaryFriendCreateWithoutUnstableFrequency2] }),
    }),
  });
