import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutReverseTransaction } from "./createWithoutReverseTransaction";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyCreateRelationWithoutReverseTransaction = builder
  .inputRef<any>("UnstableFrequencyCreateRelationWithoutReverseTransaction")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: UnstableFrequencyWhereUnique }),
      create: t.field({ type: UnstableFrequencyCreateWithoutReverseTransaction }),
    }),
  });
