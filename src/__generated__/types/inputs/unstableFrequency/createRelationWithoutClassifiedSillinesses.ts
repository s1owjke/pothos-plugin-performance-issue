import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutClassifiedSillinesses } from "./createWithoutClassifiedSillinesses";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyCreateRelationWithoutClassifiedSillinesses = builder
  .inputRef<any>("UnstableFrequencyCreateRelationWithoutClassifiedSillinesses")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: UnstableFrequencyWhereUnique }),
      create: t.field({ type: UnstableFrequencyCreateWithoutClassifiedSillinesses }),
    }),
  });
