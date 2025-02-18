import { builder } from "src/builder";

import { ArtificialPotatoCreateWithoutOverwrittenLegacy } from "./createWithoutOverwrittenLegacy";
import { ArtificialPotatoUpdateWithoutOverwrittenLegacy } from "./updateWithoutOverwrittenLegacy";
import { ArtificialPotatoWhereUnique } from "./whereUnique";

export const ArtificialPotatoUpdateRelationWithoutOverwrittenLegacy = builder
  .inputRef<any>("ArtificialPotatoUpdateRelationWithoutOverwrittenLegacy")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ArtificialPotatoWhereUnique }),
      disconnect: t.field({ type: ArtificialPotatoWhereUnique }),
      create: t.field({ type: ArtificialPotatoCreateWithoutOverwrittenLegacy }),
      update: t.field({ type: ArtificialPotatoUpdateWithoutOverwrittenLegacy }),
    }),
  });
