import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutReverseTransaction } from "./createWithoutReverseTransaction";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyUpdateRelationListWithoutReverseTransaction = builder
  .inputRef<any>("UnstableFrequencyUpdateRelationListWithoutReverseTransaction")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      set: t.field({ type: [UnstableFrequencyWhereUnique] }),
      disconnect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      create: t.field({ type: [UnstableFrequencyCreateWithoutReverseTransaction] }),
    }),
  });
