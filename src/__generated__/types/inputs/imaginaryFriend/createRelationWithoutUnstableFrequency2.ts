import { builder } from "src/builder";

import { ImaginaryFriendCreateWithoutUnstableFrequency2 } from "./createWithoutUnstableFrequency2";
import { ImaginaryFriendWhereUnique } from "./whereUnique";

export const ImaginaryFriendCreateRelationWithoutUnstableFrequency2 = builder
  .inputRef<any>("ImaginaryFriendCreateRelationWithoutUnstableFrequency2")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ImaginaryFriendWhereUnique }),
      create: t.field({ type: ImaginaryFriendCreateWithoutUnstableFrequency2 }),
    }),
  });
