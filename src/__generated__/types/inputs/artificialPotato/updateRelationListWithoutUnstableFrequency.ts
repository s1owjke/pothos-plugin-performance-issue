import { builder } from "src/builder";

import { ArtificialPotatoCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { ArtificialPotatoWhereUnique } from "./whereUnique";

export const ArtificialPotatoUpdateRelationListWithoutUnstableFrequency = builder
  .inputRef<any>("ArtificialPotatoUpdateRelationListWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ArtificialPotatoWhereUnique] }),
      set: t.field({ type: [ArtificialPotatoWhereUnique] }),
      disconnect: t.field({ type: [ArtificialPotatoWhereUnique] }),
      create: t.field({ type: [ArtificialPotatoCreateWithoutUnstableFrequency] }),
    }),
  });
