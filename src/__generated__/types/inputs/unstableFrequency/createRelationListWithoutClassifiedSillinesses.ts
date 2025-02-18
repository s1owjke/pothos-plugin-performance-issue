import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutClassifiedSillinesses } from "./createWithoutClassifiedSillinesses";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyCreateRelationListWithoutClassifiedSillinesses = builder
  .inputRef<any>("UnstableFrequencyCreateRelationListWithoutClassifiedSillinesses")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      create: t.field({ type: [UnstableFrequencyCreateWithoutClassifiedSillinesses] }),
    }),
  });
