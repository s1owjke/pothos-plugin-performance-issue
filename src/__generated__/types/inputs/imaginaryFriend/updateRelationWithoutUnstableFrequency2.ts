import { builder } from "src/builder";

import { ImaginaryFriendCreateWithoutUnstableFrequency2 } from "./createWithoutUnstableFrequency2";
import { ImaginaryFriendUpdateWithoutUnstableFrequency2 } from "./updateWithoutUnstableFrequency2";
import { ImaginaryFriendWhereUnique } from "./whereUnique";

export const ImaginaryFriendUpdateRelationWithoutUnstableFrequency2 = builder
  .inputRef<any>("ImaginaryFriendUpdateRelationWithoutUnstableFrequency2")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ImaginaryFriendWhereUnique }),
      disconnect: t.field({ type: ImaginaryFriendWhereUnique }),
      create: t.field({ type: ImaginaryFriendCreateWithoutUnstableFrequency2 }),
      update: t.field({ type: ImaginaryFriendUpdateWithoutUnstableFrequency2 }),
    }),
  });
