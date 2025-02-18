import { builder } from "src/builder";

import { ArtificialPotatoCreateWithoutOverwrittenLegacy } from "./createWithoutOverwrittenLegacy";
import { ArtificialPotatoWhereUnique } from "./whereUnique";

export const ArtificialPotatoUpdateRelationListWithoutOverwrittenLegacy = builder
  .inputRef<any>("ArtificialPotatoUpdateRelationListWithoutOverwrittenLegacy")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ArtificialPotatoWhereUnique] }),
      set: t.field({ type: [ArtificialPotatoWhereUnique] }),
      disconnect: t.field({ type: [ArtificialPotatoWhereUnique] }),
      create: t.field({ type: [ArtificialPotatoCreateWithoutOverwrittenLegacy] }),
    }),
  });
