import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutReverseTransaction } from "./createWithoutReverseTransaction";
import { UnstableFrequencyUpdateWithoutReverseTransaction } from "./updateWithoutReverseTransaction";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyUpdateRelationWithoutReverseTransaction = builder
  .inputRef<any>("UnstableFrequencyUpdateRelationWithoutReverseTransaction")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: UnstableFrequencyWhereUnique }),
      disconnect: t.field({ type: UnstableFrequencyWhereUnique }),
      create: t.field({ type: UnstableFrequencyCreateWithoutReverseTransaction }),
      update: t.field({ type: UnstableFrequencyUpdateWithoutReverseTransaction }),
    }),
  });
