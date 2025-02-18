import { builder } from "src/builder";

import { ArtificialPotatoCreateWithoutOverwrittenLegacy } from "./createWithoutOverwrittenLegacy";
import { ArtificialPotatoWhereUnique } from "./whereUnique";

export const ArtificialPotatoCreateRelationWithoutOverwrittenLegacy = builder
  .inputRef<any>("ArtificialPotatoCreateRelationWithoutOverwrittenLegacy")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ArtificialPotatoWhereUnique }),
      create: t.field({ type: ArtificialPotatoCreateWithoutOverwrittenLegacy }),
    }),
  });
