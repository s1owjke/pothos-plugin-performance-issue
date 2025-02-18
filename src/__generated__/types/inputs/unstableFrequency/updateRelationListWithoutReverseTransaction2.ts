import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutReverseTransaction2 } from "./createWithoutReverseTransaction2";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyUpdateRelationListWithoutReverseTransaction2 = builder
  .inputRef<any>("UnstableFrequencyUpdateRelationListWithoutReverseTransaction2")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      set: t.field({ type: [UnstableFrequencyWhereUnique] }),
      disconnect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      create: t.field({ type: [UnstableFrequencyCreateWithoutReverseTransaction2] }),
    }),
  });
