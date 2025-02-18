import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutReverseTransaction2 } from "./createWithoutReverseTransaction2";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyCreateRelationListWithoutReverseTransaction2 = builder
  .inputRef<any>("UnstableFrequencyCreateRelationListWithoutReverseTransaction2")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      create: t.field({ type: [UnstableFrequencyCreateWithoutReverseTransaction2] }),
    }),
  });
