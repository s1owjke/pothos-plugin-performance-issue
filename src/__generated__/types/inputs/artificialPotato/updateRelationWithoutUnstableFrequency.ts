import { builder } from "src/builder";

import { ArtificialPotatoCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { ArtificialPotatoUpdateWithoutUnstableFrequency } from "./updateWithoutUnstableFrequency";
import { ArtificialPotatoWhereUnique } from "./whereUnique";

export const ArtificialPotatoUpdateRelationWithoutUnstableFrequency = builder
  .inputRef<any>("ArtificialPotatoUpdateRelationWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ArtificialPotatoWhereUnique }),
      disconnect: t.field({ type: ArtificialPotatoWhereUnique }),
      create: t.field({ type: ArtificialPotatoCreateWithoutUnstableFrequency }),
      update: t.field({ type: ArtificialPotatoUpdateWithoutUnstableFrequency }),
    }),
  });
