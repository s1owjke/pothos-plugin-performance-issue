import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutImaginaryFriends } from "./createWithoutImaginaryFriends";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyCreateRelationListWithoutImaginaryFriends = builder
  .inputRef<any>("UnstableFrequencyCreateRelationListWithoutImaginaryFriends")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      create: t.field({ type: [UnstableFrequencyCreateWithoutImaginaryFriends] }),
    }),
  });
