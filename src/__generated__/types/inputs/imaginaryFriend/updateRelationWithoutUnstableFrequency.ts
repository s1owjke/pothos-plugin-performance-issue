import { builder } from "src/builder";

import { ImaginaryFriendCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { ImaginaryFriendUpdateWithoutUnstableFrequency } from "./updateWithoutUnstableFrequency";
import { ImaginaryFriendWhereUnique } from "./whereUnique";

export const ImaginaryFriendUpdateRelationWithoutUnstableFrequency = builder
  .inputRef<any>("ImaginaryFriendUpdateRelationWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ImaginaryFriendWhereUnique }),
      disconnect: t.field({ type: ImaginaryFriendWhereUnique }),
      create: t.field({ type: ImaginaryFriendCreateWithoutUnstableFrequency }),
      update: t.field({ type: ImaginaryFriendUpdateWithoutUnstableFrequency }),
    }),
  });
