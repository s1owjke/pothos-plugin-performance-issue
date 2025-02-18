import { builder } from "src/builder";

import { ArtificialPotatoCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { ArtificialPotatoWhereUnique } from "./whereUnique";

export const ArtificialPotatoCreateRelationListWithoutUnstableFrequency = builder
  .inputRef<any>("ArtificialPotatoCreateRelationListWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ArtificialPotatoWhereUnique] }),
      create: t.field({ type: [ArtificialPotatoCreateWithoutUnstableFrequency] }),
    }),
  });
