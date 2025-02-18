import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutImaginaryFriends } from "./createWithoutImaginaryFriends";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyUpdateRelationListWithoutImaginaryFriends = builder
  .inputRef<any>("UnstableFrequencyUpdateRelationListWithoutImaginaryFriends")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      set: t.field({ type: [UnstableFrequencyWhereUnique] }),
      disconnect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      create: t.field({ type: [UnstableFrequencyCreateWithoutImaginaryFriends] }),
    }),
  });
