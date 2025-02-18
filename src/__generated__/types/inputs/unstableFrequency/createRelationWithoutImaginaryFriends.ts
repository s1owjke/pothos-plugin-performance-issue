import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutImaginaryFriends } from "./createWithoutImaginaryFriends";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyCreateRelationWithoutImaginaryFriends = builder
  .inputRef<any>("UnstableFrequencyCreateRelationWithoutImaginaryFriends")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: UnstableFrequencyWhereUnique }),
      create: t.field({ type: UnstableFrequencyCreateWithoutImaginaryFriends }),
    }),
  });
