import { builder } from "src/builder";

import { ArtificialPotatoCreateWithoutOverwrittenLegacy } from "./createWithoutOverwrittenLegacy";
import { ArtificialPotatoWhereUnique } from "./whereUnique";

export const ArtificialPotatoCreateRelationListWithoutOverwrittenLegacy = builder
  .inputRef<any>("ArtificialPotatoCreateRelationListWithoutOverwrittenLegacy")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ArtificialPotatoWhereUnique] }),
      create: t.field({ type: [ArtificialPotatoCreateWithoutOverwrittenLegacy] }),
    }),
  });
