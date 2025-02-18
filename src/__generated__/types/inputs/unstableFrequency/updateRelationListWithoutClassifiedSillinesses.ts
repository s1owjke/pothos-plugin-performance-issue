import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutClassifiedSillinesses } from "./createWithoutClassifiedSillinesses";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyUpdateRelationListWithoutClassifiedSillinesses = builder
  .inputRef<any>("UnstableFrequencyUpdateRelationListWithoutClassifiedSillinesses")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      set: t.field({ type: [UnstableFrequencyWhereUnique] }),
      disconnect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      create: t.field({ type: [UnstableFrequencyCreateWithoutClassifiedSillinesses] }),
    }),
  });
