import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutReverseTransaction } from "./createWithoutReverseTransaction";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyCreateRelationListWithoutReverseTransaction = builder
  .inputRef<any>("UnstableFrequencyCreateRelationListWithoutReverseTransaction")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      create: t.field({ type: [UnstableFrequencyCreateWithoutReverseTransaction] }),
    }),
  });
