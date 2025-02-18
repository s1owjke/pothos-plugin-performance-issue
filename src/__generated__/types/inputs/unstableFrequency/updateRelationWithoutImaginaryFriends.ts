import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutImaginaryFriends } from "./createWithoutImaginaryFriends";
import { UnstableFrequencyUpdateWithoutImaginaryFriends } from "./updateWithoutImaginaryFriends";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyUpdateRelationWithoutImaginaryFriends = builder
  .inputRef<any>("UnstableFrequencyUpdateRelationWithoutImaginaryFriends")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: UnstableFrequencyWhereUnique }),
      disconnect: t.field({ type: UnstableFrequencyWhereUnique }),
      create: t.field({ type: UnstableFrequencyCreateWithoutImaginaryFriends }),
      update: t.field({ type: UnstableFrequencyUpdateWithoutImaginaryFriends }),
    }),
  });
