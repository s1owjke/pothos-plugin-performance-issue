import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutImaginaryFriends2 } from "./createWithoutImaginaryFriends2";
import { UnstableFrequencyUpdateWithoutImaginaryFriends2 } from "./updateWithoutImaginaryFriends2";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyUpdateRelationWithoutImaginaryFriends2 = builder
  .inputRef<any>("UnstableFrequencyUpdateRelationWithoutImaginaryFriends2")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: UnstableFrequencyWhereUnique }),
      disconnect: t.field({ type: UnstableFrequencyWhereUnique }),
      create: t.field({ type: UnstableFrequencyCreateWithoutImaginaryFriends2 }),
      update: t.field({ type: UnstableFrequencyUpdateWithoutImaginaryFriends2 }),
    }),
  });
