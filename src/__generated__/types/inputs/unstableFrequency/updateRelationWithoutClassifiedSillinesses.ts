import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutClassifiedSillinesses } from "./createWithoutClassifiedSillinesses";
import { UnstableFrequencyUpdateWithoutClassifiedSillinesses } from "./updateWithoutClassifiedSillinesses";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyUpdateRelationWithoutClassifiedSillinesses = builder
  .inputRef<any>("UnstableFrequencyUpdateRelationWithoutClassifiedSillinesses")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: UnstableFrequencyWhereUnique }),
      disconnect: t.field({ type: UnstableFrequencyWhereUnique }),
      create: t.field({ type: UnstableFrequencyCreateWithoutClassifiedSillinesses }),
      update: t.field({ type: UnstableFrequencyUpdateWithoutClassifiedSillinesses }),
    }),
  });
