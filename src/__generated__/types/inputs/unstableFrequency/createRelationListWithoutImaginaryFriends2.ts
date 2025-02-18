import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutImaginaryFriends2 } from "./createWithoutImaginaryFriends2";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyCreateRelationListWithoutImaginaryFriends2 = builder
  .inputRef<any>("UnstableFrequencyCreateRelationListWithoutImaginaryFriends2")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      create: t.field({ type: [UnstableFrequencyCreateWithoutImaginaryFriends2] }),
    }),
  });
