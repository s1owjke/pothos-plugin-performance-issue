import { builder } from "src/builder";

import { ImaginaryFriendCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { ImaginaryFriendWhereUnique } from "./whereUnique";

export const ImaginaryFriendCreateRelationListWithoutUnstableFrequency = builder
  .inputRef<any>("ImaginaryFriendCreateRelationListWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ImaginaryFriendWhereUnique] }),
      create: t.field({ type: [ImaginaryFriendCreateWithoutUnstableFrequency] }),
    }),
  });
