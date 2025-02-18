import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutImaginaryFriends2 } from "./createWithoutImaginaryFriends2";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyUpdateRelationListWithoutImaginaryFriends2 = builder
  .inputRef<any>("UnstableFrequencyUpdateRelationListWithoutImaginaryFriends2")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      set: t.field({ type: [UnstableFrequencyWhereUnique] }),
      disconnect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      create: t.field({ type: [UnstableFrequencyCreateWithoutImaginaryFriends2] }),
    }),
  });
