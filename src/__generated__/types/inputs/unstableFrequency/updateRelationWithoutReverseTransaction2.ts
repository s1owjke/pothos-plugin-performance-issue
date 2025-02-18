import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutReverseTransaction2 } from "./createWithoutReverseTransaction2";
import { UnstableFrequencyUpdateWithoutReverseTransaction2 } from "./updateWithoutReverseTransaction2";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyUpdateRelationWithoutReverseTransaction2 = builder
  .inputRef<any>("UnstableFrequencyUpdateRelationWithoutReverseTransaction2")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: UnstableFrequencyWhereUnique }),
      disconnect: t.field({ type: UnstableFrequencyWhereUnique }),
      create: t.field({ type: UnstableFrequencyCreateWithoutReverseTransaction2 }),
      update: t.field({ type: UnstableFrequencyUpdateWithoutReverseTransaction2 }),
    }),
  });
